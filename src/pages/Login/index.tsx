import "./login.css"

export default function Login(){
    const handleSubmit = (event: any) => {
        event.preventDefault(); // Prevent real form submission
        window.location.href = "/projects"; // Redirect to the projetos page
      };
    
      return (
        <div className="login-container">
          <img src="img.png" alt="Logo Grupo Simoldes" />
          <form id="login-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Usuário" required />
            <input type="password" placeholder="Senha" required />
            <button type="submit">Entrar</button>
          </form>
        </div>
      );
}