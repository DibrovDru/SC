import React from "react";
import ChangeData from "./ChangeData";

function Profile() {
    return (
        <div>
            <section>
                <p><img className="picture" src="../picture.jpeg" alt=""/></p>
            </section>

            <section className="name">StudyCards</section>

            <section className="table">
                <article className="form"></article>

                <article>
                    <p className="profile">Your profile</p>
                </article>

                <ChangeData />

            </section>
        </div>
    )
}

export default Profile;