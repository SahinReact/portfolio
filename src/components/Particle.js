import Particles from 'react-particles-js';
import React from 'react';
import 'react-tsparticles';

function Particle() {
    return (
        <>
        <Particles width="100vw" height="73vh"
            params={{
                    particles: {
                        number: {
                            value: 100,
                            "density": {
                                "enable": true,
                                "value_area": 800
                            }
                        },
                        color: {
                            value: "random",
                            animation: {
                                enable: true,
                                speed: 0,
                                sync: false
                            }
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: 5,
                            random: true,
                            animation: {
                                enable: false,
                                speed:80,
                                size_min: 0.1,
                                sync: false
                            }
                        },
                        line_linked: {
                            enable: true,
                            distance: 120,
                            color: "random",
                            opacity: .5,
                            width: 2
                        },
    
                    },
                    interactivity: {
                        detectsOn: "canvas",
                        events: {
                            onHover: {
                                enable: true,
                                mode: "repulse"
                            },
                            onClick: {
                                enable: true,
                                mode: "bubble"
                            },
                            resize: true
                        },
                        modes: {
                            grab: {
                                distance: 300,
                                speed:0.5,
                               line_linked: {
                                    opacity: 1
                                }
                            },
                            bubble: {
                                distance: 400,
                                size: 40,
                                duration: 2,
                                opacity: 0.8,
                                speed:3
                            },
                            repulse: {
                                distance: 100,
                                duration:0.4
                            },
                            push: {
                                quantity: 2,
                                particles_nb: 4
                            },
                            remove: {
                                quantity: 2
                            }
                
                        },
                        move: {
                            enable: true,
                            speed: 5,
                            direction: 'none',
                            random: false,
                            straight: false,
                            out_mode: 'out',
                            bounce: false,
                            attract: {
                              enable: false,
                              rotateX: 3000,
                              rotateY: 3000
                            }
                          },
                          retina_detect: true
                    }
               }}
        />
        </>
    )
}

export default Particle;