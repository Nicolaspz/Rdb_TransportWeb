import React, { useState } from 'react';

const AccountDeletion = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        reason: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Enviar dados para a API
        fetch('https://api.rdbtransportes.com/delete-account', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (response.ok) {
                    alert('Solicitação enviada com sucesso!');
                    setFormData({ name: '', email: '', reason: '' });
                } else {
                    alert('Erro ao enviar a solicitação. Tente novamente mais tarde.');
                }
            })
            .catch((error) => {
                console.error('Erro:', error);
                alert('Erro ao enviar a solicitação. Verifique sua conexão e tente novamente.');
            });
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Eliminação de Conta</h1>
            <p style={styles.paragraph}>
                Bem-vindo à página de eliminação de conta da <strong>RDB Transportes</strong>. Aqui você pode solicitar a exclusão da sua conta e dos dados associados.
                Por favor, preencha o formulário abaixo para que possamos processar sua solicitação.
            </p>

            <form onSubmit={handleSubmit}>
                <label style={styles.label} htmlFor="name">Nome Completo:</label>
                <input
                    style={styles.input}
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <label style={styles.label} htmlFor="email">E-mail associado à conta:</label>
                <input
                    style={styles.input}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Seu e-mail"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label style={styles.label} htmlFor="reason">Motivo para a exclusão (opcional):</label>
                <textarea
                    style={styles.textarea}
                    id="reason"
                    name="reason"
                    placeholder="Digite aqui o motivo (se desejar)..."
                    value={formData.reason}
                    onChange={handleChange}
                />

                <p style={styles.paragraph}>Após o envio, processaremos sua solicitação de exclusão e entraremos em contato para confirmar a conclusão.</p>

                <button style={styles.button} type="submit">Enviar Solicitação</button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '600px',
        margin: '50px auto',
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif',
    },
    header: {
        textAlign: 'center',
        color: '#0056b3',
    },
    paragraph: {
        lineHeight: '1.6',
        margin: '20px 0',
        color: '#333',
    },
    label: {
        display: 'block',
        marginBottom: '8px',
        fontWeight: 'bold',
        color: '#333',
    },
    input: {
        width: '100%',
        padding: '10px',
        marginBottom: '20px',
        border: '1px solid #ccc',
        borderRadius: '4px',
    },
    textarea: {
        width: '100%',
        padding: '10px',
        marginBottom: '20px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        minHeight: '100px',
    },
    button: {
        display: 'block',
        width: '100%',
        padding: '10px',
        backgroundColor: '#0056b3',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        fontSize: '16px',
        cursor: 'pointer',
    },
    buttonHover: {
        backgroundColor: '#003f7a',
    },
};

export default AccountDeletion;
