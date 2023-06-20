import React from "react";
import { Nav, initializeIcons } from "@fluentui/react";

const Links = [
    {
        links: [
            {
                name: 'Dashboard',
                url: '/',
                key: 'Key1',
                iconProps: {
                    iconName: 'News',
                    styles: {
                        root: {
                            fontSize: 20,
                            color: '#106ebe',
                        }
                    }
                }
                
            },
            {
                name: 'Settings',
                url: '/',
                key: 'Key2',
                iconProps: {
                    iconName: 'playerSettings',
                    styles: {
                        root: {
                            fontSize: 20,
                            color: '#106ebe',
                        }
                    }
                }
                
            },
            {
                name: 'Transfer',
                url: '/',
                key: 'Key3',
                iconProps: {
                    iconName: 'SwitcherStartEnd',
                    styles: {
                        root: {
                            fontSize: 20,
                            color: '#106ebe',
                        }
                    }
                }
                
            },
            {
                name: 'Stats',
                url: '/',
                key: 'Key4',
                iconProps: {
                    iconName: 'StackedLineChart',
                    styles: {
                        root: {
                            fontSize: 20,
                            color: '#106ebe',
                        }
                    }
                }
                
            },
        ]
    }
            
];

const navigationStyles = {
    root: {
        height: '100vh',
        boxSizing: 'border-box',
        border: '1px solid #eee',
        overflowY: 'auto',
        paddingTop: '10vh',
    }
}

const Navigation = () => {
    initializeIcons();
    return (
        <Nav 
            groups={Links}
            selectedKey="key1"
            styles = {navigationStyles}
        />
    )
}

export default Navigation;