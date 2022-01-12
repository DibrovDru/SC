import React from "react";
import LogInForm from "./LogInForm";

function LogIn() {
    return (
        <div>
            <section>
                <p><img className="picture" src="../picture.jpeg" alt=""/></p>
            </section>

            <section className="name_log_in">StudyCards</section>

            <section className="table">
                <article className="form"></article>

                <article>
                    <p className="log_in_text">Log in</p>
                </article>

                <LogInForm />

            </section>
        </div>
    )
}

export default LogIn;