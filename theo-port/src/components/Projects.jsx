import React from "react";
import "../Projects.css";

function Projects(){
    return(
        <>
        <section id="projects" className="projects">
            <h2>My Previous works</h2>
            <ul>
                <li>
                    <h3>First one</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias reiciendis nulla facere nam ipsam amet dicta blanditiis iusto a at, modi fugiat sequi consequuntur reprehenderit nostrum velit totam dolor provident.</p>
                    <img src="/theo.jpg" alt="ScreenShot" />
                </li>
                <li>
                    <h3>Second one</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias reiciendis nulla facere nam ipsam amet dicta blanditiis iusto a at, modi fugiat sequi consequuntur reprehenderit nostrum velit totam dolor provident.</p>
                    <img src="/theo.jpg" alt="ScreenShot" />
                </li>
                <li>
                    <h3>Third one</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias reiciendis nulla facere nam ipsam amet dicta blanditiis iusto a at, modi fugiat sequi consequuntur reprehenderit nostrum velit totam dolor provident.</p>
                    <img src="/theo.jpg" alt="ScreenShot" />
                </li>
            </ul>
        </section> 
        </>
    );
}
export default Projects;