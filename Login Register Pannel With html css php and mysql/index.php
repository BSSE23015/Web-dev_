<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
      rel="stylesheet"
    />

    <link rel="stylesheet" href="./style.css" />

    <title>Project</title>
  </head>
  <body>
    <div class="container">
      <div class="form-box active" id="login-form">
        <form action="">
          <h2>Login</h2>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" name="login">Login</button>
          <p>
            Don't have an account?
            <a href="#" onclick="showForm('register-form')">Register</a>
          </p>
        </form>
      </div>
      <div class="form-box" id="register-form">
        <form action="">
          <h2>Register</h2>
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <select name="role" required>
            <option value="">--Select Role--</option>
            <option value="">User</option>
            <option value="">Admin</option>
          </select>
          <button type="submit" name="register">Register</button>
          <p>
            Don't have an account?
            <a href="#" onclick="showForm('login-form')">Register</a>
          </p>
        </form>
      </div>
    </div>
    <script src="./script.js"></script>
  </body>
</html>
