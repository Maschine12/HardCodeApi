import { connect, connection, ConnectOptions } from "mongoose";

interface ConnectionState {
  isConnected: boolean;
}

const conn: ConnectionState = {
  isConnected: false,
};

export async function connectDB(): Promise<void> {
  if (conn.isConnected) return;
  try {
    const db = await connect('mongodb://localhost/DataBaseUsers', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
    conn.isConnected = !!db.connections[0].readyState;
  } catch (err) {
    console.error("Error connecting to the database:", err);
  }
}

connection.on("connected", () => {
  console.log("Mongoose is connected");
});

connection.on("error", (err) => {
  console.log("Mongoose connection error:", err);
});
