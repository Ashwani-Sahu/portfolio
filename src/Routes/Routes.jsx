import React from "react";
import { Route, Switch } from "react-router-dom";
import { Navbar } from "../Components/Navbar/Navbar";
import { Greeting } from "../Components/Greeting/Greeting";
import { Qualifications } from "../Components/Qualifications/Qualifications";
import { Skills } from "./../Components/Skills/Skills";
import { Projects } from "./../Components/Projects/Projects";
import { Blogs } from "./../Components/Blogs/Blogs";

export const Routes = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route path="/" exact>
                    <Greeting />
                </Route>
                <Route path="/home">
                    <Greeting />
                </Route>

                <Route path="/qualifications">
                    <Qualifications />
                </Route>

                <Route path="/skills">
                    <Skills />
                </Route>

                <Route path="/projects">
                    <Projects />
                </Route>
                <Route path="/blogs">
                    <Blogs />
                </Route>
            </Switch>
        </div>
    );
};
