import { useState } from "react";
import { FaEnvelope } from "react-icons/fa"; 
import { Link } from "react-router-dom"; 

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email) {
      setError("Por favor, preencha seu e-mail.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Digite um e-mail válido.");
      return;
    }

    setSuccess(true);
    setError("");
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Recuperar Senha</h1>

        {success ? (
          <div>
            <p>Um link para recuperação de senha foi enviado para o seu e-mail.</p>
            <Link to="/login">Voltar ao Login</Link>
          </div>
        ) : (
          <div>
            <div className="input-field">
              <input
                type="email"
                placeholder="E-mail"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FaEnvelope className="icon" />
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button type="submit">Enviar Link de Recuperação</button>
            <div className="signup-link">
              <p>
                Lembrou a senha? <Link to="/login">Fazer login</Link>
              </p>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default ForgotPassword;
