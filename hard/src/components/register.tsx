"use client"
import React, { useState } from 'react';

function Register() {
    const [formData, setFormData] = useState({
        dni: '',
        email: '',
        password: '',
        role: 'estudiante',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Registro creado exitosamente');
                setFormData({
                    dni: '',
                    email: '',
                    password: '',
                    role: 'estudiante',
                });
            } else {
                const data = await response.json();
                alert(`Error: ${data.message}`);
            }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (e) {
            alert('Ocurrió un error al registrar el usuario ');
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
            <h1 className="text-xl font-bold mb-4">Registrar Usuario</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">DNI</label>
                    <input
                        type="text"
                        name="dni"
                        value={formData.dni}
                        onChange={handleChange}
                        required
                        className="w-full mt-1 p-2 border rounded-md"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full mt-1 p-2 border rounded-md"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Contraseña</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="w-full mt-1 p-2 border rounded-md"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                >
                    Registrar
                </button>
            </form>
        </div>
    );
}

export default Register;
