import React from "react";
import photo from "./photo.png"
import vector from './icons/vector.png'

export default function Info() {
    return (
        <div className="infoContainer">
            <img src={photo} />
            <h1>Morgan Wongsuwan</h1>
            <h3>Full Stack Developer Student</h3>
            <a href="https://github.com/m-wongsuwan"><p>https://github.com/m-wongsuwan</p></a>
            <br />
            <a href="mwongsuwan@gmail.com">
                <button className="emailBtn btn"><div className="inBtn"><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8Zz4KICA8cGF0aCBkPSJtMzY2LjM3IDM3Ny44N2MyLjY3OTcgMi4yOTMgNi4wOTM4IDMuNTUwOCA5LjYyMTEgMy41NTA4IDMuNTI3MyAwIDYuOTM3NS0xLjI1NzggOS42MTcyLTMuNTUwOGwxNzAuNjUtMTQ2LjI2Yy01LjUxNTYtMi4zNzExLTExLjQ1Ny0zLjU5NzctMTcuNDY1LTMuNTk3N2gtMzI1LjU5Yy02LjAwMzkgMC0xMS45NDkgMS4yMzA1LTE3LjQ2MSAzLjYwOTR6Ii8+CiAgPHBhdGggZD0ibTQwNC44OSA0MDAuMzNjLTguMDIzNCA2LjkxOC0xOC4yNjYgMTAuNzIzLTI4Ljg1OSAxMC43MjNzLTIwLjgzNi0zLjgwNDctMjguODU5LTEwLjcyM2wtMTczLjE0LTE0OC4zNmMtMy4zODI4IDYuMjg1Mi01LjE3NTggMTMuMzAxLTUuMjI2NiAyMC40Mzh2MjA3LjE5YzAgMTEuNzczIDQuNjc5NyAyMy4wNjYgMTMuMDA0IDMxLjM5NSA4LjMyODEgOC4zMjQyIDE5LjYyMSAxMy4wMDQgMzEuMzk1IDEzLjAwNGgzMjUuNTljMTEuNzc3IDAgMjMuMDctNC42Nzk3IDMxLjM5NS0xMy4wMDQgOC4zMjgxLTguMzI4MSAxMy4wMDQtMTkuNjIxIDEzLjAwNC0zMS4zOTV2LTIwNy4xOWMtMC4wNDY4NzUtNy4xMzY3LTEuODM5OC0xNC4xNTItNS4yMjI3LTIwLjQzOHoiLz4KIDwvZz4KPC9zdmc+Cg=="alt="email icon"/>Email</div></button>
            </a>
            <a href="www.linkedin.com/in/m-wongsuwan">
                <button className="linkedInBtn btn"><div className="inBtn"><img src={vector}/>  LinkedIn</div></button>
            </a>
            
        </div>
    )
}