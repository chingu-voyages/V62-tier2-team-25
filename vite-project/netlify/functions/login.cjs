exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ error: "Method Not Allowed" }) };
  }

  try {
    const { email, password } = JSON.parse(event.body);

    if (!email || !password) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Email and password are required" }),
      };
    }

    const userName = email.split("@")[0];
    
    // Simulamos un token de acceso seguro (la contraseña JAMAS viaja de regreso ni se guarda)
    const simulatedToken = "mock_jwt_token_" + Math.random().toString(36).substring(2);

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: `Welcome back, ${userName}!`,
        token: simulatedToken, // <- Esto es lo que guardaremos como "llave"
        user: { email, name: userName }
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};