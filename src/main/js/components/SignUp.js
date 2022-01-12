import React from "react";
import SignUpForm from "./SignUpForm";

function SignUp() {
    return (
        <div>
            <section>
                <p><img className="picture" src="../picture.jpeg" alt=""/></p>
            </section>

            <section className="name_sign_up">
                    StudyCards
                </section>

                <section>
                    <article className="form_sign_up"></article>

                    <p className="sign_up_text">Sign up</p>

                    <SignUpForm />

                </section>
        </div>
    )
}

export default SignUp;