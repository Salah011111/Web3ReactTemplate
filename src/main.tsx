import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import IndexRouter from "./router/indexRouter";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <IndexRouter/>
        </BrowserRouter>
    </React.StrictMode>,
)
