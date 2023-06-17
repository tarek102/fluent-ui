import React from "react";
import { Nav, initializeIcons } from "@fluentui/react";

const Links = [
    {
        links: [
            {
                name: 'Dashboard',
                url: '/',
                key: 'Key1',
                styles: {
                    root: {
                        fontSize: 20,
                        color: '#106ebe',
                    }
                }
            },
            {
                name: 'Dashboard',
                url: '/',
                key: 'Key1',
                styles: {
                    root: {
                        fontSize: 20,
                        color: '#106ebe',
                    }
                }
            },
            {
                name: 'Dashboard',
                url: '/',
                key: 'Key1',
                styles: {
                    root: {
                        fontSize: 20,
                        color: '#106ebe',
                    }
                }
            },
            {
                name: 'Dashboard',
                url: '/',
                key: 'Key1',
                styles: {
                    root: {
                        fontSize: 20,
                        color: '#106ebe',
                    }
                }
            }
        ]
    }
]

const Navigation = () => {
    initializeIcons();
    return (
        <Nav />
    )
}

export default Navigation;