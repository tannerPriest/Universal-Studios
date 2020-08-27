import React from "react"
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core"

const Landing = (props) => {
    return (
        <div>
            <Typography variant="h3">Welcome to Universal Studios Dev App!</Typography>
            <Typography>
                <Link to='/login'>Login</Link>
            </Typography>
        </div>
    );
};

export default Landing;
