// netlify/functions/signup.js
exports.handler = async (event, context) => {
  // Asegurarse de que sea una petición POST
  if (event.httpMethod !== "POST") {
    return { 
      statusCode: 405, 
      body: JSON.stringify({ error: "Method Not Allowed" }) 
    };
  }

  try {
    const { name, email, password, confirmPassword } = JSON.parse(event.body);

    // Validación básica en el servidor
    if (!name || !email || !password) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "All fields are required" }),
      };
    }

    // Validar que las contraseñas coincidan
    if (confirmPassword && password !== confirmPassword) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Passwords don't match" }),
      };
    }

    const trimmedName = name.trim();

    // Generamos un token simulado de acceso seguro (en producción sería un JWT firmado)
    const simulatedToken = "mock_jwt_signup_token_" + Math.random().toString(36).substring(2);

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: `Account created successfully for ${trimmedName}!`,
        token: simulatedToken, // La llave de acceso para el frontend
        user: { 
          email, 
          name: trimmedName 
        }
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};