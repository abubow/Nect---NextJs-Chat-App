import React, { useContext } from "react";

import { Context } from "../context";

import { useRouter } from "next/router";

import axios from "axios";

const Auth = () => {
  const { username, setUsername, password, setPassword } = useContext(Context);

  const router = useRouter();

  function onSubmit(e) {
    e.preventDefault();

    if (username.length === 1 || password.length === 1) return;

    axios
      .put(
        "https://api.chatengine.io/users/",
        { username, secret: password },
        { headers: { "Private-Key": process.env.NEXT_PUBLIC_CHAT_ENGINE_KEY } }
      )

      .then((r) => {
        router.push("/chats");
      });
  }
	return (
		<div className="background">
			<div className="auth-container">
				<form
					className="auth-form"
					onSubmit={(e) => onSubmit(e)}>
					<h1 className="auth-title">Login</h1>
					<div className="input-container">
						<input
							type="text"
							className="text-input"
							placeholder="Username"
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>
					<div className="input-container">
						<input
							type="password"
							className="text-input"
							placeholder="Password"
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<button
						type="submit"
						className="submit-button">
						Login / Register
					</button>
				</form>
			</div>
		</div>
	);
}

export default Auth;