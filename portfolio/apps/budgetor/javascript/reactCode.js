class RotatingCircles extends React.Component{
        constructor(props){
                super(props)
                this.state = {
                        returnButton : {
                                height : '0%',
                                width : '0%',
                                opacity: '0px'
                        },
                        wrapperStyle : {
                                position : 'fixed',
                                height : '100%',
                                width : '100%',
                                opacity : '1',
                                background : 'yellow'
                        },
                        wrapper2Style : {
                                position : 'fixed',
                                height : '100%',
                                width : '100%',
                                opacity : '1',
                                background : 'radial-gradient(white, black)'
                        },
                        innerCircle : {
                                position : 'fixed',
                                transition: 'all 4s ease-in',
                                borderRadius : '100%',
                                top : '42.5%',
                                right : '46%',
                                height : '15%',
                                width : '8%',
                                opacity : '1',
                    borderWidth : '2px',
                    borderStyle : 'outset',
                         boxShadow : '1px 4px',
                                 borderColor: 'silver',
                                background : 'blue'
                        },
                        outerCircle1 : {
                                position : 'fixed',
                                borderRadius : '100%',
                                bottom : '40%',
                                right : '44.5%',
                                height : '20%',
                                width : '11%',
                                opacity : '1',
                         boxShadow: '100px black',
                    borderWidth : '2px',
                    borderStyle : 'outset',
                         boxShadow : '1px 4px',
                                 borderColor: 'silver',
                                background : 'green'
                        },
                        outerCircle2 : {
                                position : 'fixed',
                                borderRadius : '100%',
                                top : '37.5%',
                                right : '43%',
                                height : '25%',
                                width : '14%',
                    borderWidth : '2px',
                    borderStyle : 'outset',
                         boxShadow : '3px 3px 3px 3px',
                                 borderColor: 'silver',
                                opacity : '1',
                                background : 'red'
                        },
                        outerCircle3 : {
                                position : 'fixed',
                                borderRadius : '100%',
                                top : '35%',
                                left : '41.5%',
                                height : '30%',
                                width : '17%',
                    borderWidth : '2px',
                    borderStyle : 'outset',
                         boxShadow : '3px 3px 3px 3px',
                                 borderColor: 'silver',
                                opacity : '1',
                                background : 'purple'
                        },
                        imgBoxStyle1 : {
                                top : '0px',
                                left : '0px',
                                width : '0px',
                                height : '0px',
                                opacity : '0px'
                        },
                        imgBoxStyle2 : {
                                top : '0px',
                                left : '0px',
                                width : '0px',
                                height : '0px',
                                opacity : '0px'
                        },
                        imgBoxStyle3 : {
                                top : '0px',
                                left : '0px',
                                width : '0px',
                                height : '0px',
                                opacity : '0px'
                        },
                        imgBoxStyle4 : {
                                top : '0px',
                                left : '0px',
                                width : '0px',
                                height : '0px',
                                opacity : '0px'
                        },
                        imgBoxStyle5 : {
                                top : '0px',
                                left : '0px',
                                width : '0px',
                                height : '0px',
                                opacity : '0px'
                        }
                }
                this.startHomePage = this.startHomePage.bind(this)
                this.returnImages = this.returnImages.bind(this)
        }
        innerCircleClick = () => {
                this.setState({
                        innerCircle : {
                                position : 'fixed',
                                borderRadius : '100%',
                                top : '42.5%',
                                right : '46%',
                                height : '15%',
                                width : '8%',
                                opacity : '1',
                    borderWidth : '2px',
                    borderStyle : 'inset',
                         boxShadow : '1px white',
                                 borderColor: 'silver',
                                background : 'black',
                                transition: 'all 1s ease-out'
                        },
                        outerCircle1 : {
                                position : 'fixed',
                                borderRadius : '100%',
                                bottom : '40%',
                                right : '44.5%',
                                height : '20%',
                                width : '11%',
                                opacity : '1',
                    borderWidth : '2px',
                    borderStyle : 'inset',
                         boxShadow : '1px 1px',
                                 borderColor: 'silver',
                                background : 'white',
                                transitionDelay: '1s',
                                transitionDuration : '2s'
                        },
                        outerCircle2 : {
                                position : 'fixed',
                                borderRadius : '100%',
                                top : '37.5%',
                                right : '43%',
                                height : '25%',
                                width : '14%',
                    borderWidth : '2px',
                    borderStyle : 'outset',
                         boxShadow : '3px 3px 3px 3px',
                                 borderColor: 'silver',
                                background : 'black',
                                transitionDelay: '2s',
                                transitionDuration : '3s'
                        },
                        outerCircle3 : {
                                position : 'fixed',
                                borderRadius : '100%',
                                top : '35%',
                                left : '41.5%',
                                height : '30%',
                                width : '17%',
                    borderWidth : '2px',
                    borderStyle : 'outset',
                         boxShadow : '3px 3px 3px 3px',
                                 borderColor: 'silver',
                                opacity : '1',
                                background : 'white',
                                transitionDelay: '4s',
                                transitionDuration : '3s'
                        },
                        wrapperStyle : {
                                position : 'fixed',
                                height : '100%',
                                width : '100%',
                                opacity : '1',
                                background : 'black',
                                transitionDelay: '5s',
                                transitionDuration : '7s'
                        }
                })
                this.transitionToHomePage = true
        }
        startHomePage = () =>{
                if(this.transitionToHomePage == true){
                        this.transitionToHomePage = false
                        setTimeout(function() {
                                this.setState({
                                        returnButton : {
                                                height: '15%',
                                                width: '30%',
                                                opacity: '0.5',
                                                top: '85%',
                                                left: '0%',
                                                background: 'blue',
                                                transition: 'all 4s ease-in',
                                                transitionDuration : '4s',
                                                position: 'fixed'
                                        },
                                        innerCircle : {
                                                position : 'fixed',
                                                top : '0%',
                                                right : '0%',
                                                height : '5%',
                                                width : '100%',
                                                opacity : '1',
                                    borderWidth : '2px',
                                    borderStyle : 'inset',
                                 boxShadow : '1px white',
                                         borderColor: 'silver',
                                                background : 'white',
                                                transition: 'all 4s ease-in',
                                                transitionDuration : '4s'
                                        },
                                        outerCircle1 : {
                                                position : 'fixed',
                                                borderRadius : '0%',
                                                bottom : '0%',
                                                right : '0%',
                                                height : '15%',
                                                width : '70%',
                                                opacity : '1',
                                                borderWidth : '2px',
                                                borderStyle : 'inset',
                                                boxShadow : '1px 1px',
                                                borderColor: 'silver',
                                                background : 'white',
                                                transition: 'all 4s ease-in',
                                                transitionDuration : '4s'
                                        },
                                        outerCircle2 : {
                                                position : 'fixed',
                                                borderRadius : '0%',
                                                top : '5%',
                                                right : '0%',
                                                height : '85%',
                                                width : '40%',
                                    borderWidth : '2px',
                                    borderStyle : 'outset',
                                 boxShadow : '3px 3px 3px 3px',
                                         borderColor: 'silver',
                                                background : 'black',
                                                transitionDelay: '4s',
                                                transition: 'all 4s ease-in',
                                                transitionDuration : '4s'
                                        },
                                        outerCircle3 : {
                                                position : 'fixed',
                                                borderRadius : '0%',
                                                top : '10%',
                                                left : '0%',
                                                height : '35%',
                                                width : '60%',
                                    borderWidth : '2px',
                                    borderStyle : 'outset',
                                 boxShadow : '3px 3px 3px 3px',
                                         borderColor: 'silver',
                                                opacity : '1',
                                                background : 'white',
                                                transitionDelay: '4s',
                                                transition: 'all 4s ease-in',
                                                transitionDuration : '4s'
                                        }
                                })
                        this.readyForImages = true
                        this.startImageBoxes()
                }.bind(this), 7000);
                }
        }

        startImageBoxes = () => {
                if(this.readyForImages == true){
                        setTimeout(function() {
                                this.setState({
                                        returnButton : {
                                                height: '15%',
                                                width: '30%',
                                                opacity: '0.5',
                                                top: '85%',
                                                left: '0%',
                                                background: 'blue',
                                                transition: 'all 4s ease-in',
                                                transitionDuration : '4s',
                                                position: 'fixed'
                                        },
                                        imgBoxStyle1 : {
                                                position: 'relative',
                                                top : '5%',
                                                left : '4%',
                                                width : '20%',
                                                height : '50%',
                                                backgroundImage: "url('http://78.media.tumblr.com/af5167b7190ed722566528b98c7f3590/tumblr_o0v7k5TAW81teue7jo1_1280.jpg')",
                                    borderWidth : '2px',
                                    borderStyle : 'outset',
                                 boxShadow : '3px 3px 3px 3px',
                                         borderColor: 'silver',
                                                opacity : '1',
                                                transitionDelay: '1s',
                                                transition: 'all 1s ease-in',
                                                transitionDuration : '1s'
                                        },
                                        imgBoxStyle2 : {
                                                position: 'relative',
                                                bottom : '7%',
                                                left : '28%',
                                                width : '20%',
                                                height : '50%',
                                                backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFqLH1H2eYUP9bfvzF-Iz8CLdzghh72f1Vm17l7GD4KhbHbNjI')",
                                    borderWidth : '2px',
                                    borderStyle : 'outset',
                                 boxShadow : '3px 3px 3px 3px',
                                         borderColor: 'silver',
                                                opacity : '1',
                                                transitionDelay: '2s',
                                                transition: 'all 2s ease-in',
                                                transitionDuration : '2s'
                                        },
                                        imgBoxStyle3 : {
                                                position: 'relative',
                                                top : '-95%',
                                                left : '53%',
                                                width : '20%',
                                                height : '50%',
                                                backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLT02zB6ZoRLAkGYqaUZYeRSkq8Q19zyH3YUq-uRYGdrtJ_sj4DQ')",
                                    borderWidth : '2px',
                                    borderStyle : 'outset',
                                 boxShadow : '3px 3px 3px 3px',
                                         borderColor: 'silver',
                                                opacity : '1',
                                                transitionDelay: '3s',
                                                transition: 'all 3s ease-in',
                                                transitionDuration : '3s'
                                        },
                                        imgBoxStyle4 : {
                                                position: 'relative',
                                                top : '-107%',
                                                left : '77%',
                                                width : '20%',
                                                height : '50%',
                                                backgroundImage: "url('https://vignette.wikia.nocookie.net/animal-jam-clans-1/images/a/a3/Header-photo-the-dirt.jpg/revision/latest?cb=20160319235120')",
                                    borderWidth : '2px',
                                    borderStyle : 'outset',
                                 boxShadow : '3px 3px 3px 3px',
                                         borderColor: 'silver',
                                                opacity : '1',
                                                transitionDelay: '4s',
                                                transition: 'all 4s ease-in',
                                                transitionDuration : '4s'
                                        },
                                        imgBoxStyle5 : {
                                                position: 'relative',
                                                top : '-215%',
                                                left : '0%',
                                                width : '100%',
                                                height : '15%',
                                                backgroundImage: "url('http://www.capstoneinfrastructure.com/Assets/Gallery/Website%20Enhancement/Goulais%20Bay/Beautiful%20sky.jpg')",
                                    borderWidth : '2px',
                                    borderStyle : 'outset',
                                 boxShadow : '3px 3px 3px 3px',
                                         borderColor: 'silver',
                                                opacity : '1',
                                                transitionDelay: '5s',
                                                transition: 'all 5s ease-in',
                                                transitionDuration : '5s'
                                        }
                                })
                        }.bind(this), 2000);
                }
        }
        imageBox1OnHover = () => {
                this.setState({
                        imgBoxStyle1 : {
                                position: 'relative',
                                top : '5%',
                                left : '4%',
                                width : '20%',
                                height : '50%',
                                background : 'red',
                    borderWidth : '2px',
                    borderStyle : 'inset',
                         boxShadow : '5px 5px 5px 5px',
                                 borderColor: 'silver'
                        }
                })
        }
        imageBox2OnHover = () => {
                this.setState({
                        imgBoxStyle2 : {
                                position: 'relative',
                                bottom : '7%',
                                left : '28%',
                                width : '20%',
                                height : '50%',
                                background : 'purple',
                    borderWidth : '2px',
                    borderStyle : 'inset',
                         boxShadow : '5px 5px 5px 5px',
                                 borderColor: 'silver'
                        }
                })
        }
        imageBox3OnHover = () => {
                this.setState({
                        imgBoxStyle3 : {
                                position: 'relative',
                                top : '-95%',
                                left : '53%',
                                width : '20%',
                                height : '50%',
                                background : 'orange',
                    borderWidth : '2px',
                    borderStyle : 'inset',
                         boxShadow : '5px 5px 5px 5px',
                                borderColor: 'silver'
                        }
                })
        }
        imageBox4OnHover = () => {
                this.setState({
                        imgBoxStyle4 : {
                                position: 'relative',
                                top : '-107%',
                                left : '77%',
                                width : '20%',
                                height : '50%',
                                background : 'green',
                    borderWidth : '2px',
                    borderStyle : 'inset',
                         boxShadow : '5px 5px 5px 5px',
                                borderColor: 'silver'
                        }
                })
        }
        imageBox5OnHover = () => {
                this.setState({
                        imgBoxStyle5 : {
                                position: 'relative',
                                top : '-215%',
                                left : '0%',
                                width : '100%',
                                height : '15%',
                                background : 'blue',
                    borderWidth : '2px',
                    borderStyle : 'inset',
                         boxShadow : '5px 5px 5px 5px',
                                 borderColor: 'silver'
                        }
                })
        }
        imageBox1HoverOut = () => {
                this.setState({
                        imgBoxStyle1 : {
                                position: 'relative',
                                top : '5%',
                                left : '4%',
                                width : '20%',
                                height : '50%',
                                background : 'red',
                    borderWidth : '2px',
                    borderStyle : 'outset',
                         boxShadow : '3px 3px 3px 3px',
                                 borderColor: 'silver'
                        }
                })
        }
        imageBox2HoverOut = () => {
                this.setState({
                        imgBoxStyle2 : {
                                position: 'relative',
                                bottom : '7%',
                                left : '28%',
                                width : '20%',
                                height : '50%',
                                background : 'purple',
                    borderWidth : '2px',
                    borderStyle : 'outset',
                         boxShadow : '3px 3px 3px 3px',
                                 borderColor: 'silver'
                        }
                })
        }
        imageBox3HoverOut = () => {
                this.setState({
                        imgBoxStyle3 : {
                                position: 'relative',
                                top : '-95%',
                                left : '53%',
                                width : '20%',
                                height : '50%',
                                background : 'orange',
                    borderWidth : '2px',
                    borderStyle : 'outset',
                                boxShadow : '3px 3px 3px 3px',
                                borderColor: 'silver'
                        }
                })
        }
        imageBox4HoverOut = () => {
                this.setState({
                        imgBoxStyle4 : {
                                position: 'relative',
                                top : '-107%',
                                left : '77%',
                                width : '20%',
                                height : '50%',
                                background : 'green',
                    borderWidth : '2px',
                    borderStyle : 'outset',
                                boxShadow : '3px 3px 3px 3px',
                                borderColor: 'silver'
                        }
                })
        }
        imageBox5HoverOut = () => {
                this.setState({
                        imgBoxStyle5 : {
                                position: 'relative',
                                top : '-215%',
                                left : '0%',
                                width : '100%',
                                height : '15%',
                                background : 'blue',
                    borderWidth : '2px',
                    borderStyle : 'outset',
                         boxShadow : '3px 3px 3px 3px',
                                 borderColor: 'silver'
                        }
                })
        }
        imgBox1Start = () => {
                this.setState({
                        returnButton : {
                                height: '3%',
                    width: '57%',
                    top: '46.3%',
                    position: 'fixed',
                    left: '1.5%',
                                background: 'black',
                                opacity: '1',
                                transition: 'all 1s ease-in',
                                transitionDuration : '1s'
                        },
                        outerCircle1 : {
                                position : 'fixed',
                                borderRadius : '0%',
                                bottom : '0%',
                                right : '40%',
                                height : '15%',
                                width : '60.5%',
                                opacity : '1',
                                borderWidth : '2px',
                                borderStyle : 'inset',
                                boxShadow : '1px 1px',
                                borderColor: 'silver',
                                background : 'white',
                                transition: 'all 1s ease-in',
                                transitionDuration : '1s'
                        },
                        innerCircle : {
                                position : 'fixed',
                                top : '0%',
                                right : '40%',
                                height : '5%',
                                width : '60.5%',
                                opacity : '1',
                                borderWidth : '2px',
                                borderStyle : 'inset',
                                boxShadow : '1px white',
                                borderColor: 'silver',
                                background : 'white',
                                transition: 'all 1s ease-in',
                                transitionDuration : '1s'
                        },
                        outerCircle2 : {
                                position : 'fixed',
                                borderRadius : '0%',
                                right : '0%',
                                height : '100%',
                                width : '40%',
                                borderWidth : '2px',
                                borderStyle : 'outset',
                                boxShadow : '3px 3px 3px 3px',
                                borderColor: 'silver',
                                background : 'black',
                                transitionDelay: '4s',
                                transition: 'all 4s ease-in',
                                transitionDuration : '4s'
                        },
                        imgBoxStyle1 : {
                                position: 'fixed',
                                top : '45%',
                                left : '0%',
                                width : '60%',
                                height : '40%',
                                background : 'red',
                    borderWidth : '8px',
                    borderStyle : 'outset',
                         boxShadow : '3px 3px 3px 3px',
                                 borderColor: 'silver',
                                transition: 'all 1s ease-in',
                                transitionDuration : '1s'
                        },
                        imgBoxStyle2 : {
                                position: 'relative',
                                bottom : '64%',
                                left : '0%',
                                width : '23.8%',
                                height : '11%',
                                background : 'purple',
                    borderWidth : '1px',
                    borderStyle : 'outset',
                         boxShadow : '3px 3px 3px 3px',
                                 borderColor: 'silver',
                                transition: 'all 1s ease-in',
                                transitionDuration : '1s'
                        },
                        imgBoxStyle3 : {
                                position: 'relative',
                                top : '-76%',
                                left : '25%',
                                width : '23%',
                                height : '12.5%',
                                background : 'orange',
                    borderWidth : '1px',
                    borderStyle : 'outset',
                         boxShadow : '3px 3px 3px 3px',
                                 borderColor: 'silver',
                                transition: 'all 1s ease-in',
                                transitionDuration : '1s'
                        },
                        imgBoxStyle4 : {
                                position: 'relative',
                                top : '-88%',
                                left : '48.5%',
                                width : '24%',
                                height : '11%',
                                background : 'green',
                    borderWidth : '1px',
                    borderStyle : 'outset',
                         boxShadow : '3px 3px 3px 3px',
                                 borderColor: 'silver',
                                transition: 'all 1s ease-in',
                                transitionDuration : '1s'
                        },
                        imgBoxStyle5 : {
                                position: 'relative',
                                top : '-99%',
                                left : '73.5%',
                                width : '26%',
                                height : '12%',
                                background : 'gold',
                    borderWidth : '1px',
                    borderStyle : 'outset',
                         boxShadow : '3px 3px 3px 3px',
                                 borderColor: 'silver',
                                transition: 'all 1s ease-in',
                                transitionDuration : '1s'
                        }
                })
                this.openDiv = true
        }
        imgBox2Start = () => {
                this.setState({
                        returnButton : {
                                height: '3%',
                    width: '57%',
                    top: '46.3%',
                    position: 'fixed',
                    left: '1.5%',
                                background: 'black',
                                opacity: '1',
                                transition: 'all 1s ease-in',
                                transitionDuration : '1s'
                        },
                        innerCircle : {
                                position : 'fixed',
                                top : '0%',
                                right : '0%',
                                height : '5%',
                                width : '100%',
                                opacity : '1',
                                borderWidth : '2px',
                                borderStyle : 'inset',
                                boxShadow : '1px white',
                                borderColor: 'silver',
                                background : 'white',
                                transition: 'all 1s ease-in',
                                transitionDuration : '1s'
                        },
                        outerCircle1 : {
                                position : 'fixed',
                                borderRadius : '0%',
                                bottom : '0%',
                                right : '0%',
                                height : '15%',
                                width : '100%',
                                opacity : '1',
                                borderWidth : '2px',
                                borderStyle : 'inset',
                                boxShadow : '1px 1px',
                                borderColor: 'silver',
                                background : 'white',
                                transition: 'all 1s ease-in',
                                transitionDuration : '1s'
                        },
                        imgBoxStyle2 : {
                                position: 'fixed',
                                top : '45%',
                                left : '0%',
                                width : '60%',
                                height : '40%',
                                background : 'red',
                    borderWidth : '8px',
                    borderStyle : 'outset',
                         boxShadow : '3px 3px 3px 3px',
                                 borderColor: 'silver',
                                transition: 'all 1s ease-in',
                                transitionDuration : '1s'
                        },
                        imgBoxStyle1 : {
                                position: 'relative',
                                bottom : '14%',
                                left : '0%',
                                width : '23.8%',
                                height : '11%',
                                background : 'purple',
                    borderWidth : '1px',
                    borderStyle : 'outset',
                         boxShadow : '3px 3px 3px 3px',
                                 borderColor: 'silver',
                                transition: 'all 1s ease-in',
                                transitionDuration : '1s'
                        },
                        imgBoxStyle3 : {
                                position: 'relative',
                                top : '-95%',
                                left : '25%',
                                width : '23%',
                                height : '12.5%',
                                background : 'orange',
                    borderWidth : '1px',
                    borderStyle : 'outset',
                         boxShadow : '3px 3px 3px 3px',
                                 borderColor: 'silver',
                                transition: 'all 1s ease-in',
                                transitionDuration : '1s'
                        },
                        imgBoxStyle4 : {
                                position: 'relative',
                                top : '-107%',
                                left : '48.5%',
                                width : '24%',
                                height : '11%',
                                background : 'green',
                    borderWidth : '1px',
                    borderStyle : 'outset',
                         boxShadow : '3px 3px 3px 3px',
                                 borderColor: 'silver',
                                transition: 'all 1s ease-in',
                                transitionDuration : '1s'
                        },
                        imgBoxStyle5 : {
                                position: 'relative',
                                top : '-119%',
                                left : '73.5%',
                                width : '26%',
                                height : '12%',
                                background : 'gold',
                    borderWidth : '1px',
                    borderStyle : 'outset',
                         boxShadow : '3px 3px 3px 3px',
                                 borderColor: 'silver',
                                transition: 'all 1s ease-in',
                                transitionDuration : '1s'
                        }
                })
                this.openDiv = false
        }
        imgBox3Start = () => {
                this.setState({
                        returnButton : {
                                height: '3%',
                    width: '57%',
                    top: '46.3%',
                    position: 'fixed',
                    left: '1.5%',
                                background: 'black',
                                opacity: '1',
                                transition: 'all 1s ease-in',
                                transitionDuration : '1s'
                        },
                        innerCircle : {
                                position : 'fixed',
                                top : '0%',
                                right : '0%',
                                height : '5%',
                                width : '100%',
                                opacity : '1',
                                borderWidth : '2px',
                                borderStyle : 'inset',
                                boxShadow : '1px white',
                                borderColor: 'silver',
                                background : 'white',
                                transition: 'all 1s ease-in',
                                transitionDuration : '1s'
                        },
                        outerCircle1 : {
                                position : 'fixed',
                                borderRadius : '0%',
                                bottom : '0%',
                                right : '0%',
                                height : '15%',
                                width : '100%',
                                opacity : '1',
                                borderWidth : '2px',
                                borderStyle : 'inset',
                                boxShadow : '1px 1px',
                                borderColor: 'silver',
                                background : 'white',
                                transition: 'all 1s ease-in',
                                transitionDuration : '1s'
                        },
                        imgBoxStyle3 : {
                                position: 'fixed',
                                top : '45%',
                                left : '0%',
                                width : '60%',
                                height : '40%',
                                background : 'red',
                    borderWidth : '8px',
                    borderStyle : 'outset',
                         boxShadow : '3px 3px 3px 3px',
                                 borderColor: 'silver',
                                transition: 'all 1s ease-in',
                                transitionDuration : '1s'
                        },
                        imgBoxStyle1 : {
                                position: 'relative',
                                bottom : '14%',
                                left : '0%',
                                width : '23.8%',
                                height : '11%',
                                background : 'purple',
                    borderWidth : '1px',
                    borderStyle : 'outset',
                         boxShadow : '3px 3px 3px 3px',
                                 borderColor: 'silver',
                                transition: 'all 1s ease-in',
                                transitionDuration : '1s'
                        },
                        imgBoxStyle2 : {
                                position: 'relative',
                                top : '-95%',
                                left : '25%',
                                width : '23%',
                                height : '12.5%',
                                background : 'orange',
                    borderWidth : '1px',
                    borderStyle : 'outset',
                         boxShadow : '3px 3px 3px 3px',
                                 borderColor: 'silver',
                                transition: 'all 1s ease-in',
                                transitionDuration : '1s'
                        },
                        imgBoxStyle4 : {
                                position: 'relative',
                                top : '-107%',
                                left : '48.5%',
                                width : '24%',
                                height : '11%',
                                background : 'green',
                    borderWidth : '1px',
                    borderStyle : 'outset',
                         boxShadow : '3px 3px 3px 3px',
                                 borderColor: 'silver',
                                transition: 'all 1s ease-in',
                                transitionDuration : '1s'
                        },
                        imgBoxStyle5 : {
                                position: 'relative',
                                top : '-119%',
                                left : '73.5%',
                                width : '26%',
                                height : '12%',
                                background : 'gold',
                    borderWidth : '1px',
                    borderStyle : 'outset',
                         boxShadow : '3px 3px 3px 3px',
                                 borderColor: 'silver',
                                transition: 'all 1s ease-in',
                                transitionDuration : '1s'
                        }
                })
                this.openDiv = false
        }
        imgBox4Start = () => {
                this.setState({
                        returnButton : {
                                height: '3%',
                    width: '57%',
                    top: '46.3%',
                    position: 'fixed',
                    left: '1.5%',
                                background: 'black',
                                opacity: '1',
                                transition: 'all 1s ease-in',
                                transitionDuration : '1s'
                        },
                        innerCircle : {
                                position : 'fixed',
                                top : '0%',
                                right : '0%',
                                height : '5%',
                                width : '100%',
                                opacity : '1',
                                borderWidth : '2px',
                                borderStyle : 'inset',
                                boxShadow : '1px white',
                                borderColor: 'silver',
                                background : 'white',
                                transition: 'all 1s ease-in',
                                transitionDuration : '1s'
                        },
                        outerCircle1 : {
                                position : 'fixed',
                                borderRadius : '0%',
                                bottom : '0%',
                                right : '0%',
                                height : '15%',
                                width : '100%',
                                opacity : '1',
                                borderWidth : '2px',
                                borderStyle : 'inset',
                                boxShadow : '1px 1px',
                                borderColor: 'silver',
                                background : 'white',
                                transition: 'all 1s ease-in',
                                transitionDuration : '1s'
                        },
                        imgBoxStyle4 : {
                                position: 'fixed',
                                top : '45%',
                                left : '0%',
                                width : '60%',
                                height : '40%',
                                background : 'red',
                    borderWidth : '8px',
                    borderStyle : 'outset',
                         boxShadow : '3px 3px 3px 3px',
                                 borderColor: 'silver',
                                transition: 'all 1s ease-in',
                                transitionDuration : '1s'
                        },
                        imgBoxStyle1 : {
                                position: 'relative',
                                bottom : '14%',
                                left : '0%',
                                width : '23.8%',
                                height : '11%',
                                background : 'purple',
                    borderWidth : '1px',
                    borderStyle : 'outset',
                         boxShadow : '3px 3px 3px 3px',
                                 borderColor: 'silver',
                                transition: 'all 1s ease-in',
                                transitionDuration : '1s'
                        },
                        imgBoxStyle2 : {
                                position: 'relative',
                                top : '-95%',
                                left : '25%',
                                width : '23%',
                                height : '12.5%',
                                background : 'orange',
                    borderWidth : '1px',
                    borderStyle : 'outset',
                         boxShadow : '3px 3px 3px 3px',
                                 borderColor: 'silver',
                                transition: 'all 1s ease-in',
                                transitionDuration : '1s'
                        },
                        imgBoxStyle3 : {
                                position: 'relative',
                                top : '-107%',
                                left : '48.5%',
                                width : '24%',
                                height : '11%',
                                background : 'green',
                    borderWidth : '1px',
                    borderStyle : 'outset',
                         boxShadow : '3px 3px 3px 3px',
                                 borderColor: 'silver',
                                transition: 'all 1s ease-in',
                                transitionDuration : '1s'
                        },
                        imgBoxStyle5 : {
                                position: 'relative',
                                top : '-119%',
                                left : '73.5%',
                                width : '26%',
                                height : '12%',
                                background : 'gold',
                    borderWidth : '1px',
                    borderStyle : 'outset',
                         boxShadow : '3px 3px 3px 3px',
                                 borderColor: 'silver',
                                transition: 'all 1s ease-in',
                                transitionDuration : '1s'
                        }
                })
                this.openDiv = false
        }
        imgBox5Start = () => {
                this.setState({
                        returnButton : {
                                height: '3%',
                    width: '57%',
                    top: '46.3%',
                    position: 'fixed',
                    left: '1.5%',
                                background: 'black',
                                opacity: '1',
                                transition: 'all 1s ease-in',
                                transitionDuration : '1s'
                        },
                        innerCircle : {
                                position : 'fixed',
                                top : '0%',
                                right : '0%',
                                height : '5%',
                                width : '100%',
                                opacity : '1',
                                borderWidth : '2px',
                                borderStyle : 'inset',
                                boxShadow : '1px white',
                                borderColor: 'silver',
                                background : 'white',
                                transition: 'all 1s ease-in',
                                transitionDuration : '1s'
                        },
                        outerCircle1 : {
                                position : 'fixed',
                                borderRadius : '0%',
                                bottom : '0%',
                                right : '0%',
                                height : '15%',
                                width : '100%',
                                opacity : '1',
                                borderWidth : '2px',
                                borderStyle : 'inset',
                                boxShadow : '1px 1px',
                                borderColor: 'silver',
                                background : 'white',
                                transition: 'all 1s ease-in',
                                transitionDuration : '1s'
                        },
                        imgBoxStyle5 : {
                                position: 'fixed',
                                top : '45%',
                                left : '0%',
                                width : '60%',
                                height : '40%',
                                background : 'red',
                    borderWidth : '8px',
                    borderStyle : 'outset',
                         boxShadow : '3px 3px 3px 3px',
                                 borderColor: 'silver',
                                transition: 'all 1s ease-in',
                                transitionDuration : '1s'
                        },
                        imgBoxStyle1 : {
                                position: 'relative',
                                bottom : '14%',
                                left : '0%',
                                width : '23.8%',
                                height : '11%',
                                background : 'purple',
                    borderWidth : '1px',
                    borderStyle : 'outset',
                         boxShadow : '3px 3px 3px 3px',
                                 borderColor: 'silver',
                                transition: 'all 1s ease-in',
                                transitionDuration : '1s'
                        },
                        imgBoxStyle2 : {
                                position: 'relative',
                                top : '-95%',
                                left : '25%',
                                width : '23%',
                                height : '12.5%',
                                background : 'orange',
                    borderWidth : '1px',
                    borderStyle : 'outset',
                         boxShadow : '3px 3px 3px 3px',
                                 borderColor: 'silver',
                                transition: 'all 1s ease-in',
                                transitionDuration : '1s'
                        },
                        imgBoxStyle3 : {
                                position: 'relative',
                                top : '-107%',
                                left : '48.5%',
                                width : '24%',
                                height : '11%',
                                background : 'green',
                    borderWidth : '1px',
                    borderStyle : 'outset',
                         boxShadow : '3px 3px 3px 3px',
                                 borderColor: 'silver',
                                transition: 'all 1s ease-in',
                                transitionDuration : '1s'
                        },
                        imgBoxStyle4 : {
                                position: 'relative',
                                top : '-119%',
                                left : '73.5%',
                                width : '26%',
                                height : '12%',
                                background : 'gold',
                    borderWidth : '1px',
                    borderStyle : 'outset',
                         boxShadow : '3px 3px 3px 3px',
                                 borderColor: 'silver',
                                transition: 'all 1s ease-in',
                                transitionDuration : '1s'
                        }
                })
                this.openDiv = false
        }
        returnImages = function(){
                this.setState({
                        outerCircle1 : {
                                position : 'fixed',
                                borderRadius : '0%',
                                bottom : '0%',
                                right : '0%',
                                height : '15%',
                                width : '70%',
                                opacity : '1',
                                borderWidth : '2px',
                                borderStyle : 'inset',
                                boxShadow : '1px 1px',
                                borderColor: 'silver',
                                background : 'white',
                                transition: 'all 1s ease-in',
                                transitionDuration : '1s'
                        },
                        innerCircle : {
                                position : 'fixed',
                                top : '0%',
                                right : '0%',
                                height : '5%',
                                width : '100%',
                                opacity : '1',
                                borderWidth : '2px',
                                borderStyle : 'inset',
                                boxShadow : '1px white',
                                borderColor: 'silver',
                                background : 'white',
                                transition: 'all 1s ease-in',
                                transitionDuration : '1s'
                        },
                        returnButton : {
                                height: '15%',
                                width: '30%',
                                opacity: '0.5',
                                top: '85%',
                                left: '0%',
                                background: 'blue',
                                transition: 'all 1s ease-in',
                                transitionDuration : '1s',
                                position: 'fixed'
                        },
                        imgBoxStyle1 : {
                                position: 'relative',
                                top : '5%',
                                left : '4%',
                                width : '20%',
                                height : '50%',
                                backgroundImage: "url('http://78.media.tumblr.com/af5167b7190ed722566528b98c7f3590/tumblr_o0v7k5TAW81teue7jo1_1280.jpg')",
                                borderWidth : '2px',
                                borderStyle : 'outset',
                                boxShadow : '3px 3px 3px 3px',
                                borderColor: 'silver',
                                opacity : '1',
                                transition: 'all 1s ease-in',
                                transitionDuration : '1s'
                        },
                        imgBoxStyle2 : {
                                position: 'relative',
                                bottom : '7%',
                                left : '28%',
                                width : '20%',
                                height : '50%',
                                backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFqLH1H2eYUP9bfvzF-Iz8CLdzghh72f1Vm17l7GD4KhbHbNjI')",
                                borderWidth : '2px',
                                borderStyle : 'outset',
                                boxShadow : '3px 3px 3px 3px',
                                borderColor: 'silver',
                                opacity : '1',
                                transition: 'all 1s ease-in',
                                transitionDuration : '1s'
                        },
                        imgBoxStyle3 : {
                                position: 'relative',
                                top : '-95%',
                                left : '53%',
                                width : '20%',
                                height : '50%',
                                backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLT02zB6ZoRLAkGYqaUZYeRSkq8Q19zyH3YUq-uRYGdrtJ_sj4DQ')",
                                borderWidth : '2px',
                                borderStyle : 'outset',
                                boxShadow : '3px 3px 3px 3px',
                                borderColor: 'silver',
                                opacity : '1',
                                transition: 'all 1s ease-in',
                                transitionDuration : '1s'
                        },
                        imgBoxStyle4 : {
                                position: 'relative',
                                top : '-107%',
                                left : '77%',
                                width : '20%',
                                height : '50%',
                                backgroundImage: "url('https://vignette.wikia.nocookie.net/animal-jam-clans-1/images/a/a3/Header-photo-the-dirt.jpg/revision/latest?cb=20160319235120')",
                                borderWidth : '2px',
                                borderStyle : 'outset',
                                boxShadow : '3px 3px 3px 3px',
                                borderColor: 'silver',
                                opacity : '1',
                                transition: 'all 1s ease-in',
                                transitionDuration : '1s'
                        },
                        imgBoxStyle5 : {
                                position: 'relative',
                                top : '-215%',
                                left : '0%',
                                width : '100%',
                                height : '15%',
                                backgroundImage: "url('http://www.capstoneinfrastructure.com/Assets/Gallery/Website%20Enhancement/Goulais%20Bay/Beautiful%20sky.jpg')",
                                borderWidth : '2px',
                                borderStyle : 'outset',
                                boxShadow : '3px 3px 3px 3px',
                                borderColor: 'silver',
                                opacity : '1',
                                transition: 'all 1s ease-in',
                                transitionDuration : '1s'
                        }
                })
                this.openDiv = false
        }
                componentDidMount() {
                }
                componentWillReceiveProps(newProps) {
                }
                shouldComponentUpdate(newProps, newState) {
                return true;
                }
                componentWillUpdate(nextProps, nextState) {
                }
                componentDidUpdate(prevProps, prevState) {
                        if (this.transitionToHomePage == true){
                                this.startHomePage()
                        }
                }
                componentWillUnmount() {
                 }
                        triggerFoo() {
                                this.foo4.determineItemType(this.foo2.saveInformation())
                                this.foo.placeDivs(this.foo2.saveInformation())
                                this.foo2.deleteInformation()
                        }
        render(){
                return (
                        <div id='wrapper2' style={this.state.wrapperStyle}>
                                <div id='div1' style={this.state.outerCircle3}>
                                  <BudgetReport openDiv={this.openDiv} ref={foo4 => this.foo4 = foo4} />
                                  <div onClick={this.imgBox1Start} style={this.state.imgBoxStyle1} id='imgBox1'>
                                    <DuplicateElements openDiv={this.openDiv} ref={foo2 => this.foo2 = foo2} onClick={this.triggerFoo.bind(this)}/>
                                  </div>
                                  <div onClick={this.imgBox2Start} style={this.state.imgBoxStyle2} id='imgBox2'></div>
                                  <div onClick={this.imgBox3Start} style={this.state.imgBoxStyle3} id='imgBox3'></div>
                                  <div onClick={this.imgBox4Start} style={this.state.imgBoxStyle4} id='imgBox4'></div>
                                  <div onClick={this.imgBox5Start} style={this.state.imgBoxStyle5} id='imgBox5'></div>
                                  <button id='return_button' style={this.state.returnButton} onClick={this.returnImages}></button>
                                </div>
                                <div id='div2' style={this.state.outerCircle2}>
                                        <SavedElements openDiv={this.openDiv} ref={foo => this.foo = foo} />
                                </div>
                                <div id='div3' style={this.state.outerCircle1}></div>
                                <div id='div4' onClick={this.innerCircleClick} style={this.state.innerCircle}></div>
                        </div>
                )
        }
}
class DuplicateElements extends React.Component{
  constructor(props){
    super(props)
    this.elementCounter = this.elementCounter.bind(this)
    this.placeCustomTitles = this.placeCustomTitles.bind(this)
    this.considerType = this.considerType.bind(this)
    this.unformatMoney = this.unformatMoney.bind(this)
    this.formatMoney = this.formatMoney.bind(this)
    this.customTitles = this.customTitles.bind(this)
    this.dateOwed = this.dateOwed.bind(this)
    this.dateReceived = this.dateReceived.bind(this)
    this.checkNames = this.checkNames.bind(this)
    this.multipleElementCheckandRemove = this.multipleElementCheckandRemove.bind(this)
    this.state = {
      numberOfElements: 0,
      optionDivStyle: {
         position: 'relative',
         left: '28%'
       },
       inputStyle: {
         position: 'relative',
         height: '13%',
         width: '101%'
       },
       saveButtonStyle: {
         position: 'relative',
         right: '-104%'
       },
       deleteButtonStyle: {
         position: 'relative',
         right: '-107%'
       },
       overAllDivStyle: {
         position: 'relative',
         top: '18%',
         width: '100%',
         height: '60%'
       }
    }
    this.buttonArray = []
  }
    counter = this.props.counter || 0
    dateType = ''
            elementCounter = () => {
      this.counter++
      this.buttonDuplicator(this.counter)
      this.setState({
        numberOfElements: this.state.numberOfElements++
      })
    }
    formatMoney = (event) => {
      var value = parseInt(event.target.value)
        var formattedNumber = accounting.formatMoney(value);
        event.target.value = formattedNumber
    }
    unformatMoney = (event) => {
        var unFormattedNumber = accounting.unformat(event.target.value);
        event.target.value = unFormattedNumber
        event.target.select()
    }
    considerType = (event) => {
      var a = event
      return a
    }
    dateReceived = () => {
      document.getElementById('budget_element_label').innerHTML = 'Income'
      document.getElementById('date_type_display').innerHTML = 'Date Received'
      var dropDownMenu = document.getElementById('dropDownMenu')
      var check = dropDownMenu.childNodes[1]
      if (document.getElementById('budget_element_label').hasChildNodes() || document.getElementById('date_type_display').hasChildNodes() || dropDownMenu.childNodes.length > 1){
        if (document.getElementById('budget_element_label').children[1]){
          document.getElementById('budget_element_label').removeChild(document.getElementById('budget_element_label').children[1])
          document.getElementById('date_type_display').removeChild(document.getElementById('date_type_display').children[1])
        }
        if (dropDownMenu.children.length > 1){
          var saveButton = dropDownMenu.childNodes[1]
          dropDownMenu.removeChild(saveButton)
        }
      }
    }
      savedDateReceived = (event) => {
        var id = event.currentTarget.id
        document.getElementById('budget_element_label'+id).innerHTML = 'Income'
        document.getElementById('date_type_display'+id).innerHTML = 'Date Received'
        var dropDownMenu = document.getElementById('dropDownMenu'+id)
        var check = dropDownMenu.childNodes[1]
        if (document.getElementById('budget_element_label'+id).hasChildNodes() || document.getElementById('date_type_display'+id).hasChildNodes() || dropDownMenu.childNodes.length > 1){
          if (document.getElementById('budget_element_label'+id).children[1]){
            document.getElementById('budget_element_label'+id).removeChild(document.getElementById('budget_element_label'+id).children[1])
            document.getElementById('date_type_display'+id).removeChild(document.getElementById('date_type_display'+id).children[1])
          }
          if (dropDownMenu.children.length > 1){
            var saveButton = dropDownMenu.childNodes[1]
            dropDownMenu.removeChild(saveButton)
          }
        }
      }
    savedDateOwed = (event) => {
      var id = event.currentTarget.id
      document.getElementById('budget_element_label'+id).innerHTML = 'Expense'
      document.getElementById('date_type_display'+id).innerHTML = 'Due Date'
      var dropDownMenu = document.getElementById('dropDownMenu'+id)
      if (document.getElementById('budget_element_label'+id).hasChildNodes() || document.getElementById('date_type_display'+id).hasChildNodes() || dropDownMenu.childNodes.length > 1){
        if (document.getElementById('budget_element_label'+id).children[1]){
          document.getElementById('budget_element_label'+id).removeChild(document.getElementById('budget_element_label'+id).children[1])
          document.getElementById('date_type_display'+id).removeChild(document.getElementById('date_type_display'+id).children[1])
        }
        if (dropDownMenu.children.length > 1){
          var saveButton = dropDownMenu.childNodes[1]
          dropDownMenu.removeChild(saveButton)
        }
      }
    }
    savedCustomTitles = (event) => {
      var id = event.currentTarget.id
      var originalLabel = document.getElementById("budget_element_label"+id)
      var elementDescriptionInput = document.createElement("INPUT");
      var dateDescriptionInput = document.createElement("INPUT");
      var date_type_display = document.getElementById('date_type_display'+id)
      var typeDropdown = document.getElementById('dropDownMenu'+id)
      var saveButton = document.createElement('BUTTON')
          elementDescriptionInput.setAttribute('placeholder', 'type custom name here')
          elementDescriptionInput.setAttribute('class', 'form-group')
          elementDescriptionInput.setAttribute('id', 'element_description'+id)
          dateDescriptionInput.setAttribute('placeholder', 'type custom date description here')
          dateDescriptionInput.setAttribute('class', 'form-group')
          dateDescriptionInput.setAttribute('id', 'date_description'+id)
          saveButton.setAttribute('class', 'btn btn-primary')
          saveButton.addEventListener("click", this.placeSavedCustomTitles)
          saveButton.setAttribute('id', 'save_custom_button'+id)
          saveButton.innerHTML = 'save custom'
          originalLabel.appendChild(elementDescriptionInput)
          date_type_display.appendChild(dateDescriptionInput)
          typeDropdown.appendChild(saveButton)
          this.multipleElementCheckandRemove(originalLabel,date_type_display,typeDropdown)
          elementDescriptionInput.focus()
    }
    placeSavedCustomTitles = (event) => {
      var id = event.currentTarget.id
      id = id.slice(18, id.length)
      var dateDescriptionInput = document.getElementById('date_description'+id)
      var elementDescriptionInput = document.getElementById('element_description'+id)
      var typeDropdown = document.getElementById('dropDownMenu'+id)

      if (elementDescriptionInput){

        if (elementDescriptionInput){
        var savedCustomElementTitle = elementDescriptionInput.value
        } else {
          var savedCustomElementTitle = document.getElementById('budget_element_label'+id).innerHTML
        }

        if (dateDescriptionInput){
          var savedCustomDateTitle = dateDescriptionInput.value
        } else {
          var savedCustomDateTitle = document.getElementById('date_type_display'+id).innerHTML
        }

        if (this.checkNames(savedCustomElementTitle) && this.checkNames(savedCustomDateTitle)){
          document.getElementById('budget_element_label'+id).innerHTML = savedCustomElementTitle
          document.getElementById('date_type_display'+id).innerHTML = savedCustomDateTitle
          typeDropdown.removeChild(typeDropdown.childNodes[1])
        } else {
          alert('must enter a title in both boxes or select another option')
        }

      }
    }
    deleteSavedInformation = (event) =>{
      var id = event.currentTarget.id
      var title = document.getElementById('title'+id)
      var amount = document.getElementById('amount'+id)
      var date = document.getElementById('date'+id)
      var dateTitle = document.getElementById('date_type_display'+id)
      var type = document.getElementById('budget_element_label'+id)
      title.value = ''
      amount.value = ''
      date.value = ''
      dateTitle.innerText = ''
      type.innerText = ''
    }
    saveSavedInformation = (event) => {
      var id = event.currentTarget.id
      var title = document.getElementById('title'+id).value
      var amount = document.getElementById('amount'+id).value
      var date = document.getElementById('date'+id).value
      var dateTitle = document.getElementById('date_type_display'+id).innerText
      var type = document.getElementById('budget_element_label'+id).innerText
      var informationObject = {
            title : title,
            amount : amount,
            date : date,
            dateTitle : dateTitle,
            type: type
      }
      return informationObject
    }
    dateReceived = () => {
      document.getElementById('budget_element_label').innerHTML = 'Income'
      document.getElementById('date_type_display').innerHTML = 'Date Received'
      var dropDownMenu = document.getElementById('dropDownMenu')
      var check = dropDownMenu.childNodes[1]
      if (document.getElementById('budget_element_label').hasChildNodes() || document.getElementById('date_type_display').hasChildNodes() || dropDownMenu.childNodes.length > 1){
        if (document.getElementById('budget_element_label').children[1]){
          document.getElementById('budget_element_label').removeChild(document.getElementById('budget_element_label').children[1])
          document.getElementById('date_type_display').removeChild(document.getElementById('date_type_display').children[1])
        }
        if (dropDownMenu.children.length > 1){
          var saveButton = dropDownMenu.childNodes[1]
          dropDownMenu.removeChild(saveButton)
        }
      }
    }
    dateOwed = () => {
      document.getElementById('budget_element_label').innerHTML = 'Expense'
      document.getElementById('date_type_display').innerHTML = 'Due Date'
      var dropDownMenu = document.getElementById('dropDownMenu')
      if (document.getElementById('budget_element_label').hasChildNodes() || document.getElementById('date_type_display').hasChildNodes() || dropDownMenu.childNodes.length > 1){
        if (document.getElementById('budget_element_label').children[1]){
          document.getElementById('budget_element_label').removeChild(document.getElementById('budget_element_label').children[1])
          document.getElementById('date_type_display').removeChild(document.getElementById('date_type_display').children[1])
        }
        if (dropDownMenu.children.length > 1){
          var saveButton = dropDownMenu.childNodes[1]
          dropDownMenu.removeChild(saveButton)
        }
      }
    }
    customTitles = () => {
      var originalLabel = document.getElementById("budget_element_label")
      var elementDescriptionInput = document.createElement("INPUT");
      var dateDescriptionInput = document.createElement("INPUT");
      var date_type_display = document.getElementById('date_type_display')
      var typeDropdown = document.getElementById('dropDownMenu')
      var saveButton = document.createElement('BUTTON')
          elementDescriptionInput.setAttribute('placeholder', 'type custom name here')
          elementDescriptionInput.setAttribute('class', 'form-group')
          elementDescriptionInput.setAttribute('id', 'element_description')
          dateDescriptionInput.setAttribute('placeholder', 'type custom date description here')
          dateDescriptionInput.setAttribute('class', 'form-group')
          dateDescriptionInput.setAttribute('id', 'date_description')
          saveButton.setAttribute('class', 'btn btn-primary')
          saveButton.addEventListener("click", this.placeCustomTitles)
          saveButton.setAttribute('id', 'save_custom_button')
          saveButton.innerHTML = 'save custom'
          originalLabel.appendChild(elementDescriptionInput)
          date_type_display.appendChild(dateDescriptionInput)
          typeDropdown.appendChild(saveButton)
          this.multipleElementCheckandRemove(originalLabel,date_type_display,typeDropdown)
          elementDescriptionInput.focus()
    }
    multipleElementCheckandRemove = (originalLabel, date_type_display,typeDropdown) => {
      if (originalLabel.childElementCount > 1 || typeDropdown.childElementCount > 2){
        for (var childCounter = 1; childCounter < originalLabel.childElementCount; childCounter++){
        var childToRemove = originalLabel.childNodes[childCounter]
          originalLabel.removeChild(childToRemove)
        }
        for (var childCounter = 1; childCounter < date_type_display.childElementCount; childCounter++){
        var childToRemove = date_type_display.childNodes[childCounter]
          date_type_display.removeChild(childToRemove)
        }
        for (var childCounter = 1; childCounter < typeDropdown.childElementCount; childCounter++){
        var childToRemove = typeDropdown.childNodes[childCounter]
          typeDropdown.removeChild(childToRemove)
        }
      }
    }

    placeCustomTitles = () => {
      var dateDescriptionInput = document.getElementById('date_description')
      var elementDescriptionInput = document.getElementById('element_description')
      var typeDropdown = document.getElementById('dropDownMenu')

      if (elementDescriptionInput){

        if (elementDescriptionInput){
        var savedCustomElementTitle = elementDescriptionInput.value
        } else {
          var savedCustomElementTitle = document.getElementById('budget_element_label').innerHTML
        }

        if (dateDescriptionInput){
          var savedCustomDateTitle = dateDescriptionInput.value
        } else {
          var savedCustomDateTitle = document.getElementById('date_type_display').innerHTML
        }

        if (this.checkNames(savedCustomElementTitle) && this.checkNames(savedCustomDateTitle)){
          document.getElementById('budget_element_label').innerHTML = savedCustomElementTitle
          document.getElementById('date_type_display').innerHTML = savedCustomDateTitle
          typeDropdown.removeChild(typeDropdown.childNodes[1])
        } else {
          alert('must enter a title in both boxes or select another option')
        }

      }
    }
    checkNames = (labelToCheck) => {
      if (labelToCheck == ''){
        return false
      } else return true
    }
    saveInformation = () => {
      var title = document.getElementById('title').value
      var amount = document.getElementById('amount').value
      var date = document.getElementById('date').value
      var dateTitle = document.getElementById('date_type_display').innerText
      var type = document.getElementById('budget_element_label').innerText
                        if (title == ""){
                                title = 'No Title'
                        }
                        if (amount == ''){
                                amount = 'No Amount'
                        }
                        if (date == ''){
                                date = 'No Date'
                        }
                        if (dateTitle == ''){
                                dateTitle = 'No Date Title'
                        }
                        if (type == 'Budget Element' || type == ''){
                                type = 'No Amount Title'
                        }
      var informationObject = {
                                title : title,
                                amount : amount,
                                date : date,
                                dateTitle : dateTitle,
                                type: type
                        }
                        // this.deleteInformation()
                        return informationObject
    }
   deleteInformation = () => {
                var title = document.getElementById('title')
                var amount = document.getElementById('amount')
                var date = document.getElementById('date')
                var dateTitle = document.getElementById('date_type_display')
                var type = document.getElementById('budget_element_label')
                title.value = ''
                amount.value = ''
                date.value = ''
                dateTitle.innerText = ''
                type.innerText = ''
        }
  render(){
                var DropdownButton = ReactBootstrap.DropdownButton
                var ButtonToolbar = ReactBootstrap.ButtonToolbar
                var MenuItem = ReactBootstrap.MenuItem
                if (this.props.editDiv){
                        var editInformation = this.props.informationObject
                        var savedDate = editInformation.date
                        var dateType = editInformation.dateType
                        var amountType = editInformation.amountType
                        return(
              <div style={this.state.overAllDivStyle}>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <div id='form_wrapper' className="form-group" style={this.state.optionDivStyle}>
                          <label id={'budget_element_label'+editInformation.buttonIndex.toString()} for="title">{amountType}</label>
                          <input type="text" placeholder={editInformation.title} style={this.state.inputStyle} className="form-control" id={"title"+editInformation.buttonIndex.toString()}></input>
                          <input type="text" placeholder={editInformation.amount} onFocus={this.unformatMoney}  onBlur={this.formatMoney} style={this.state.inputStyle} className="form-control" id={"amount"+editInformation.buttonIndex.toString()}></input>
                          <p id={'date_type_display'+editInformation.buttonIndex.toString()}>{dateType}</p>
                          <div id={'savedDate'+editInformation.buttonIndex.toString()}>{'current date: ' + savedDate}</div>
                          <input className="form-control" type="date"  id={'date'+editInformation.buttonIndex.toString()} name="bday"></input>
                          <ButtonToolbar id={'dropDownMenu'+editInformation.buttonIndex.toString()}>
                            <DropdownButton title="Type" id="dropdown-size-medium">
                              <MenuItem id='menu_item_income' id={editInformation.buttonIndex.toString()} onMouseEnter={this.savedDateReceived} eventKey="1">Income</MenuItem>
                              <MenuItem id='menu_item_expense' id={editInformation.buttonIndex.toString()} onMouseEnter={this.savedDateOwed} eventKey="2">Expense</MenuItem>
                              <MenuItem divider />
                              <MenuItem id='menu_item_other' id={editInformation.buttonIndex.toString()} onClick={this.savedCustomTitles} eventKey="3">Other</MenuItem>
                            </DropdownButton>
                          </ButtonToolbar>
                          <div>
                            <button style={this.state.saveButtonStyle} id={editInformation.buttonIndex.toString()} onClick={this.props.onClick} className="btn btn-primary">Save</button>
                            <button style={this.state.deleteButtonStyle} id={editInformation.buttonIndex.toString()} onClick={this.deleteSavedInformation} className="btn btn-danger">Delete</button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )
      this.props.editDiv = false
      }
      if (this.props.openDiv){
              return(
              <div style={this.state.overAllDivStyle}>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <div id='form_wrapper' className="form-group" style={this.state.optionDivStyle}>
                          <label id='budget_element_label' for="title">Budget Element</label>
                          <input type="text" placeholder='Title' style={this.state.inputStyle} className="form-control" id="title"></input>
                          <input type="text" placeholder='Amount' onFocus={this.unformatMoney}  onBlur={this.formatMoney} style={this.state.inputStyle} className="form-control" id="amount"></input>
                          <p id='date_type_display'></p>
                          <input className="form-control" type="date" name="bday" id='date'></input>
                          <ButtonToolbar id='dropDownMenu'>
                            <DropdownButton title="Type" id="dropdown-size-medium">
                              <MenuItem id='menu_item_income' onMouseEnter={this.dateReceived} eventKey="1">Income</MenuItem>
                              <MenuItem id='menu_item_expense' onMouseEnter={this.dateOwed} eventKey="2">Expense</MenuItem>
                              <MenuItem divider />
                              <MenuItem id='menu_item_other' onClick={this.customTitles} eventKey="3">Other</MenuItem>
                            </DropdownButton>
                          </ButtonToolbar>
                          <button style={this.state.saveButtonStyle} onClick={this.props.onClick} className="btn btn-primary">Save</button>
                          <button style={this.state.deleteButtonStyle} onClick={this.deleteInformation} className="btn btn-danger">Delete</button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )
          } else return null
  }
   componentDidUpdate(prevProps, prevState) {
      this.buttonArray = []
   }
}
class SavedElements extends React.Component{
        constructor(){
            super()
            this.state = {
              firstRow: {
                position: 'fixed',
                width: '33%',
                height: '100%',
                background: 'white',
                overflowY: 'scroll'
              },
                newDivArray: [],
                buttonStyle: "btn btn-success",
                toggleButtonStyle: this.toggleButtonStyleOn,
                numberOfButtons: 0
            }
        }
        newDivStyle = {
                position: 'relative',
                height: '12%',
                width: '100%',
                background: 'linear-gradient(45deg, rgba(243,226,199,1) 44%,rgba(193,158,103,1) 48%,rgba(182,141,76,1) 51%,rgba(233,212,179,1) 73%)',
                borderWidth: '4px',
                borderStyle: 'outset',
                boxShadow: '1px 4px',
                borderColor: 'silver'
        }
        editDivStyle = {
                position: 'relative',
                height: '30%',
                width: '100%',
                background: 'linear-gradient(45deg, rgba(243,226,199,1) 44%,rgba(193,158,103,1) 48%,rgba(182,141,76,1) 51%,rgba(233,212,179,1) 73%)',
                borderWidth: '4px',
                borderStyle: 'outset',
                boxShadow: '1px 4px',
                borderColor: 'silver'
        }
        newDivOff = {
                position: 'relative',
                height: '5%',
                width: '100%',
                background: 'linear-gradient(45deg, rgba(243,226,199,1) 44%,rgba(193,158,103,1) 48%,rgba(182,141,76,1) 51%,rgba(233,212,179,1) 73%)',
                borderWidth: '4px',
                borderStyle: 'outset',
                boxShadow: '1px 4px',
                borderColor: 'silver'
        }
        type_span_style = {
                position: 'relative',
                height: '5%',
                width: '100%',
                background: 'red',
                borderRadius: '25%'
        }
        toggleButtonGroupStyle = {
                position: 'relative',
                width: '100%'
        }
        toggleButtonStyleOff = {
                position: 'relative',
                width: '40%',
                backgroundColor: 'red',
                height: '75%',
                textShadow:'1px 1px 1px rgba(0,0,0,1)',
                fontWeight:'bold',
                textDecoration:'underline overline',
                fontStyle:'oblique',
                textTransform:'uppercase',
                color:'black',
                border: '1px solid #08FF18',
                letterSpacing:'3pt',
                wordSpacing:'-2pt',
                fontSize:'12px',
                textAlign:'center',
                fontFamily:'times new roman, times, serif',
                lineHeight:'2',
                borderWidth: '2px',
                borderStyle: 'outset',
                borderColor: 'silver'
        }
        toggleButtonStyleOn= {
                position: 'relative',
                width: '100%',
                backgroundColor: 'green',
                height: '25%',
                textShadow:'1px 1px 1px rgba(0,0,0,1)',
                fontWeight:'bold',
                textDecoration:'underline overline',
                fontStyle:'oblique',
                textTransform:'uppercase',
                color:'white',
                border: '1px solid #08FF18',
                letterSpacing:'3pt',
                wordSpacing:'-2pt',
                fontSize:'12px',
                textAlign:'center',
                fontFamily:'times new roman, times, serif',
                lineHeight:'2',
                borderWidth: '2px',
                borderStyle: 'outset',
                borderColor: 'silver'
        }
        budgetAmountStyle = {
                background: '#cce6ff',
                textShadow:'1px 1px 1px rgba(0,0,0,1)',
                fontWeight:'bold',
                fontStyle:'oblique',
                textTransform:'uppercase',
                color:'#000000',
                backgroundColor:'#FBFFF0',
                border: '1px solid #08FF18',
                letterSpacing:'3pt',
                wordSpacing:'-2pt',
                fontSize:'12px',
                textAlign:'center',
                fontFamily:'times new roman, times, serif',
                lineHeight:'2',
                borderWidth: '2px',
                borderStyle: 'outset',
                borderColor: 'silver'
        }
        budgetDateStyle = {
                background: '#cce6ff',
                textShadow:'1px 1px 1px rgba(0,0,0,1)',
                fontWeight:'bold',
                fontStyle:'oblique',
                textTransform:'uppercase',
                color:'#000000',
                backgroundColor:'#FBFFF0',
                border: '1px solid #08FF18',
                letterSpacing:'3pt',
                wordSpacing:'-2pt',
                fontSize:'12px',
                textAlign:'center',
                fontFamily:'times new roman, times, serif',
                lineHeight:'2',
                borderWidth: '2px',
                borderStyle: 'outset',
                borderColor: 'silver'
        }
        unusedStyle = {
    textDecoration: 'line-through',
                fontFamily:'times new roman, times, serif',
                textTransform:'uppercase',
                opacity: '0.5',
                textAlign:'center',
                verticalAlign: 'text-top'
        }
        textButton1 = {
                width: '28%',
                height: '61%',
                background: 'green',
                color: 'wheat',
    textDecoration: 'line-through',
                fontFamily:'times new roman, times, serif',
                textTransform:'uppercase',
                textAlign:'center',
                verticalAlign: 'text-top'
        }
        textButton2 = {
                width: '24%',
                height: '61%',
                background: 'green',
                color: 'wheat',
    textDecoration: 'line-through',
                fontFamily:'times new roman, times, serif',
                textTransform:'uppercase',
                textAlign:'center',
                verticalAlign: 'text-top'
        }

        numberOfButtons = 0
        turnOnOrOff = (event) =>{
                var buttonId = event.currentTarget.id
                var button = document.getElementById(buttonId)
                var buttonRed = 'position: relative; width: 40%; background-color: red; height: 75%; text-shadow: rgb(0, 0, 0) 1px 1px 1px; font-weight: bold; text-decoration: underline overline; font-style: oblique; text-transform: uppercase; color: black; border: 2px outset silver; letter-spacing: 3pt; word-spacing: -2pt; font-size: 12px; text-align: center; font-family: "times new roman", times, serif; line-height: 2;'
                var buttonGreen = 'position: relative; width: 100%; background-color: green; height: 25%; text-shadow: rgb(0, 0, 0) 1px 1px 1px; font-weight: bold; text-decoration: underline overline; font-style: oblique; text-transform: uppercase; color: white; border: 2px outset silver; letter-spacing: 3pt; word-spacing: -2pt; font-size: 12px; text-align: center; font-family: "times new roman", times, serif; line-height: 2;'
                var buttonRedTrue = button.attributes[1].nodeValue == buttonRed
                var buttonGreenTrue = button.attributes[1].nodeValue == buttonGreen
                var buttonIndex = parseInt(buttonId.slice(6))
                var title = this.state.newDivArray[buttonIndex - 1].props.children["0"].props.children
                var amount = this.state.newDivArray[buttonIndex - 1].props.children["1"].props.children
                var date = this.state.newDivArray[buttonIndex - 1].props.children["2"].props.children
                if (buttonRedTrue){
                        button.attributes[1].nodeValue = buttonGreen
                        title = title.slice(0, title.length - 12)
                        title = title + ' (using)'
                        this.state.newDivArray[buttonIndex - 1] =
                                <div key={'key' + buttonIndex} style={this.newDivStyle}>
                                    <button id={'button'+buttonIndex} style={this.toggleButtonStyleOn} onClick={this.turnOnOrOff}>{title}</button>
                                      <div style={this.budgetAmountStyle} id='saved_amount'>{amount}</div>
                                      <div style={this.budgetDateStyle} id='saved_date'>{date}</div>
                                    <button style={this.state.saveButtonStyle} onClick={this.editDiv} id={'edit_button' + buttonIndex} className="btn btn-primary">Edit</button>
                                    <button style={this.state.deleteButtonStyle} onClick={this.deleteDiv} id={'save_button' + buttonIndex} className="btn btn-danger">Delete</button>
                                </div>
                        this.setState({
                                newDivArray: this.state.newDivArray
                        })
                }
                //<div style={this.textDiv} id='saved_date'>{date}</div>
                if (buttonGreenTrue){
                        button.attributes[1].nodeValue = buttonRed
                        title = title.slice(0, title.length - 8)
                        title = title + ' (not using)'
                        this.state.newDivArray[buttonIndex - 1] =
                        <div key={'key' + buttonIndex} style={this.newDivOff}>
                                <button id={'button'+buttonIndex} style={this.toggleButtonStyleOff} onClick={this.turnOnOrOff}>{title}</button>
                                <button style={this.textButton1} onClick={this.editDiv} id={'edit_button' + buttonIndex} id='saved_amount'>{amount}</button>
                                <button style={this.textButton2} onClick={this.editDiv} id={'edit_button' + buttonIndex} id='saved_date'>{date}</button>
                                <button style={this.state.deleteButtonStyle} onClick={this.deleteDiv} id={'save_button' + buttonIndex} className="btn btn-danger">Delete</button>
                        </div>
                        this.setState({
                                newDivArray: this.state.newDivArray
                })
        }
}
editDiv = (event) => {
        var buttonId = event.currentTarget.parentElement.firstChild.id
        var button = document.getElementById(buttonId)
        var buttonRed = 'position: relative; width: 100%; background-color: red; height: 75%; text-shadow: rgb(0, 0, 0) 1px 1px 1px; font-weight: bold; text-decoration: underline overline; font-style: oblique; text-transform: uppercase; color: black; border: 2px outset silver; letter-spacing: 3pt; word-spacing: -2pt; font-size: 12px; text-align: left; font-family: "times new roman", times, serif; line-height: 2;'
        var buttonGreen = 'position: relative; width: 100%; background-color: green; height: 25%; text-shadow: rgb(0, 0, 0) 1px 1px 1px; font-weight: bold; text-decoration: underline overline; font-style: oblique; text-transform: uppercase; color: white; border: 2px outset silver; letter-spacing: 3pt; word-spacing: -2pt; font-size: 12px; text-align: center; font-family: "times new roman", times, serif; line-height: 2;'
        var buttonRedTrue = button.attributes[1].nodeValue == buttonRed
        var buttonGreenTrue = button.attributes[1].nodeValue == buttonGreen
        var buttonIndex = parseInt(buttonId.slice(6))
        var unparsedTitle = this.state.newDivArray[buttonIndex - 1].props.children["0"].props.children
        var unparsedAmount = this.state.newDivArray[buttonIndex - 1].props.children["1"].props.children
        var unparsedDate = this.state.newDivArray[buttonIndex - 1].props.children["2"].props.children
        var titleIndex = unparsedTitle.indexOf("(")
        var amountIndex = unparsedAmount.indexOf(":")
        var dateIndex = unparsedDate.indexOf(":")
        var title = unparsedTitle.slice(0, titleIndex-1)
        var amount = unparsedAmount.slice(amountIndex + 2, unparsedAmount.length)
        var date = unparsedDate.slice(dateIndex + 2, unparsedDate.length)
        var dateType = unparsedDate.slice(0, dateIndex)
        var amountType = unparsedAmount.slice(0, amountIndex)
        var informationObject = {
                buttonId: buttonId,
                button: button,
                buttonRed: buttonRed,
                buttonGreen: buttonGreen,
                buttonRedTrue: buttonRedTrue,
                buttonGreenTrue: buttonGreenTrue,
                buttonIndex: buttonIndex,
                dateType: dateType,
                amountType: amountType,
                title: title,
                amount: amount,
                date: date
        }
        this.state.newDivArray[buttonIndex - 1] =
                <div style={this.editDivStyle}>
                        <DuplicateElements ref={foo3 => this.foo3 = foo3} informationObject={informationObject} onClick={this.triggerFoo3.bind(this)} openDiv={true} editDiv={true}/>
                </div>
                this.setState({
                        newDivArray: this.state.newDivArray
        })
}
deleteDiv = (event) => {
        var id = event.currentTarget.id
        id = id.slice(11, id.length)
        var index = parseInt(id) - 1
        this.state.newDivArray[index] = <p></p>
        this.setState({
                        newDivArray: this.state.newDivArray
        })
}
triggerFoo3 = (event) => {
        var id = event.currentTarget.id
        var top = event.currentTarget.parentElement.firstChild.offsetParent
        var amountType = top.firstChild.innerHTML

        if (top.firstChild.nextElementSibling.value == ''){
                var title = top.firstChild.nextElementSibling.placeholder
        } else title = top.firstChild.nextElementSibling.value

        if (top.firstChild.nextElementSibling.nextElementSibling.value == ''){
                var amount = top.firstChild.nextElementSibling.nextElementSibling.placeholder
        } else var amount = top.firstChild.nextElementSibling.nextElementSibling.value

        var dateTitle = top.firstChild.nextElementSibling.nextElementSibling.nextElementSibling.innerText
        var savedDate = top.firstChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerText
        var newDate = top.firstChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.value
        savedDate = savedDate.slice(14)
        if (newDate == ''){
                var date = savedDate
        } else date = newDate

        var informationObj = {
                id: parseInt(id),
                title: title,
                amountType: amountType,
                amount: amount,
                dateTitle: dateTitle,
                date: date
        }

        this.placeEditedDiv(informationObj)
}

placeEditedDiv = (informationObj) => {
        var title = informationObj.title + ' (using)'
        var id = informationObj.id
        this.state.newDivArray[informationObj.id - 1] =
                <div style={this.newDivStyle}>
                        <button id={'button' + id} style={this.toggleButtonStyleOn} onClick={this.turnOnOrOff}>{title}</button>
                        <div style={this.budgetAmountStyle} id='saved_amount'>{informationObj.amountType + ': ' + informationObj.amount}</div>
                        <div style={this.budgetDateStyle} id='saved_date'>{informationObj.dateTitle + ': ' + informationObj.date}</div>
                        <button style={this.state.saveButtonStyle} onClick={this.editDiv} id={'edit_button' + id} className="btn btn-primary">Edit</button>
                        <button style={this.state.deleteButtonStyle} onClick={this.deleteDiv} id={'save_button' + id} className="btn btn-danger">Delete</button>
                </div>
        this.setState({
                newDivArray: this.state.newDivArray
        })
}
        saveInformation = () => {
                this.placeDivs(informationObject)
        }
        placeDivs = (informationObject) => {
                var title = informationObject.title + ' (using)'
                var amount = informationObject.type + ': ' + informationObject.amount
                var date =  informationObject.dateTitle + ': ' + informationObject.date
                this.numberOfButtons++
                var id = informationObject.id || this.numberOfButtons
                this.setState({
                        newDivArray: this.state.newDivArray.push(
                                <div style={this.newDivStyle}>
                                        <button id={'button' + id} style={this.toggleButtonStyleOn} onClick={this.turnOnOrOff}>{title}</button>
                                        <div style={this.budgetAmountStyle} id='saved_amount'>{amount}</div>
                                        <div style={this.budgetDateStyle} id='saved_date'>{date}</div>
                                        <button style={this.state.saveButtonStyle} onClick={this.editDiv} id={'edit_button' + id} className="btn btn-primary">Edit</button>
                                        <button style={this.state.deleteButtonStyle} onClick={this.deleteDiv} id={'save_button' + id} className="btn btn-danger">Delete</button>
                                </div>
                        )
                })
        }
        // <button onClick={this.placeDivs}>add div</button>
        render(){
        if (this.props.openDiv){
                return (
                        <div>
                          <table>
                            <tbody>
                              <tr>
                                <td style={this.state.firstRow}>
                                    {this.state.newDivArray}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                )
        } else return null
}
        componentWillMount() {
                        console.log('componentWillMount')
        }
        componentDidMount() {
                        console.log('componentDidMount')
        }
        componentWillReceiveProps(newProps) {
                        console.log('componentWillReceiveProps')
        }
        // shouldComponentUpdate(newProps, newState) {
        //     console.log('shouldComponentUpdate')
        // }
        componentWillUpdate(nextProps, nextState) {
                        console.log('componentWillUpdate')
        }
        componentDidUpdate(prevProps, prevState) {
                if ((!isNaN(this.state.newDivArray)) && (this.state.newDivArray.length !== 0)){
                        this.setState({
                                newDivArray: prevState.newDivArray
                        })
                }
        }
        componentWillUnmount() {
                        console.log('componentWillUnmount')
        }
}

class BudgetReport extends React.Component{
  constructor(props){
    super(props)
    this.addExpense = this.addExpense.bind(this)
    this.addIncome = this.addIncome.bind(this)
    this.determineItemType = this.determineItemType.bind(this)
    this.state = {
      incomeArray: [],
      expenseArray: [],
      incomeChanged: false,
      expenseChanged: false
    }
  }
  expenseItemCounter = 0
  incomeItemCounter = 0
  incomeAmountCounter = 1
  expenseAmountCounter = 1
  totalIncomeDollarAmount = 0
  totalExpenseDollarAmount = 0
  finalDollarAmount = '$0.00'
  remainder = 0


  determineItemType = (informationObject) => {
    var itemType = informationObject.type
    var date = informationObject.date
                var amount = informationObject.amount
                var itemName = informationObject.title
    if (itemType == 'Income'){
      this.incomeItemCounter++
      var itemNumber = this.incomeItemCounter
      this.addIncome(date, amount, itemNumber, itemName)
    }
    if (itemType == 'Expense'){
      this.expenseItemCounter++
      var itemNumber = this.expenseItemCounter
      this.addExpense(date, amount, itemNumber, itemName)
    }
  }
  budgetComponentStyle = {
    width: '100%',
    height: '24px',
    borderBottom: '2px',
    borderWidth : '2px',
    borderColor: 'silver'
  }
  tableStyle = {
    width: '50%'
  }
  budgetComponentWrapStyle = {
    height: '24px',
    borderBottom: '2px',
    borderBottomColor: 'black',
    borderBottomStyle: 'solid'
  }
  textTitleStyle = {
    textTransform: 'uppercase',
    fontWeight: 'bold'
  }

  textInformationStyle = {
    textTransform: 'uppercase',
    width: '100%',
    fontWeight: '900',
    borderBottom: '2px',
    borderBottomColor: 'black',
    borderBottomStyle: 'solid'
  }

  titleStyle = {
    textTransform: 'uppercase',
    width: '100%',
    fontWeight: '900',
    borderBottom: '2px',
    borderBottomColor: 'black',
    borderBottomStyle: 'solid',
    textDecoration: 'underline'
  }

  itemNumberStyle = {
    width: '1%'
  }
  remainderStyle = {
    textTransform: 'uppercase',
    fontWeight: '900',
    fontSize: 'xx-large'
  }
  months = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER']
  addExpense = (date, expense, itemNumber, itemName) => {
  this.expenseAmountCounter++
    var month = date.slice(5, 7)
    var day = date.slice(8,date.length)
    var year = date.slice(0, 4)
    month = this.months[parseInt(month) - 1]
    var formattedDate = month + ' ' + day + ' ' + year
    var cutDollarAmount = expense.slice(1)
    var parsedDollarAmount = parseInt(cutDollarAmount)
    var dollarAmount = '$' + parsedDollarAmount
    this.totalExpenseDollarAmount += parsedDollarAmount
    this.remainder = this.totalIncomeDollarAmount - this.totalExpenseDollarAmount
    this.finalDollarAmount = '$' + this.remainder.toFixed(2)
    var expenseItem = <tr style={this.budgetComponentWrapStyle} id = {'budgetItem' + itemNumber}>
                        <td style={this.itemNumberStyle}>
                          <tr>
                            <div className='expense' id = {'expenseItemNumber' + itemNumber}></div>
                          </tr>
                        </td>
                        <td style={this.itemNumberStyle}>
                          <tr>
                            <div style={this.budgetComponentStyle}>{formattedDate}</div>
                          </tr>
                        </td>
                        <td style={this.itemNumberStyle}>
                          <tr>
                            <div style={this.budgetComponentStyle}>{itemName}</div>
                          </tr>
                        </td>
                        <td style={this.itemNumberStyle}>
                          <tr>
                            <div style={this.budgetComponentStyle}>{dollarAmount}</div>
                          </tr>
                        </td>
                      </tr>
    this.state.expenseArray.push(expenseItem)
    sortDates(this.state.expenseArray)
    this.setState({
      expenseArray: this.state.expenseArray
    })
      this.expenseChanged = true
      this.incomeChanged = false
  }

  addIncome = (date, income, itemNumber, itemName) => {
    var month = date.slice(5, 7)
    var day = date.slice(8,date.length)
    var year = date.slice(0, 4)
    month = this.months[parseInt(month) - 1]
    var formattedDate = month + ' ' + day + ' ' + year
    var cutDollarAmount = income.slice(1)
    var parsedDollarAmount = parseFloat(cutDollarAmount)
    var dollarAmount = '$' + parsedDollarAmount
    this.totalIncomeDollarAmount += parsedDollarAmount
    this.remainder = this.totalIncomeDollarAmount - this.totalExpenseDollarAmount
    this.finalDollarAmount = '$' + this.remainder.toFixed(2)
    var incomeItem = <tr style={this.budgetComponentWrapStyle} id = {'incomeItem' + itemNumber}>
                        <td style={this.itemNumberStyle}>
                          <tr>
                            <div className='income' id = {'incomeItemNumber' + itemNumber}></div>
                          </tr>
                        </td>
                        <td style={this.itemNumberStyle}>
                          <tr>
                            <div style={this.budgetComponentStyle}>{formattedDate}</div>
                          </tr>
                        </td>
                        <td style={this.itemNumberStyle}>
                          <tr>
                            <div style={this.budgetComponentStyle}>{itemName}</div>
                          </tr>
                        </td>
                        <td style={this.itemNumberStyle}>
                          <tr>
                            <div style={this.budgetComponentStyle}>{dollarAmount}</div>
                          </tr>
                        </td>
                      </tr>
    this.state.incomeArray.push(incomeItem)
    sortDates(this.state.incomeArray)
    this.setState({
      incomeArray: this.state.incomeArray
    })
      this.expenseChanged = false
      this.incomeChanged = true
  }
  createItemNumbers = (array, arrayName) => {
    if (arrayName == 'income'){
      var incomeElements = document.getElementsByClassName('income')
      for (var itemCounter = 0; itemCounter < incomeElements.length; itemCounter++){
      incomeElements[itemCounter].innerHTML = itemCounter + 1 + ').'

      }
    }
    if (arrayName == 'expense'){
      var expenseElements = document.getElementsByClassName('expense')
      for (var itemCounter = 0; itemCounter < expenseElements.length; itemCounter++){
        expenseElements[itemCounter].innerHTML = itemCounter + 1 + ').'
      }
    }
  }

    componentWillMount() {
      console.log('componentWillMount')
    }
    componentDidMount() {
      console.log('componentDidMount')
    }
    componentWillReceiveProps(newProps) {
      console.log('componentWillReceiveProps')
    }

     componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate')
     }
     componentDidUpdate(prevProps, prevState) {
      if (this.incomeChanged){
        this.createItemNumbers(prevState.incomeArray, 'income')
      }
      if (this.expenseChanged){
        this.createItemNumbers(prevState.expenseArray, 'expense')
      }
     }
     componentWillUnmount() {
        console.log('componentWillUnmount')
     }
  render(){
                if (this.props.openDiv){
    return (
      <div>
        <p style={this.titleStyle}>ITEM #__________________________DATE____________________________TITLE_____________________AMOUNT</p>
        <div style={this.textTitleStyle}>Income</div>
        <table style={this.tableStyle} id='income'>
          <tbody>
            {this.state.incomeArray}
          </tbody>
          <tbody>
            <tr>
              <td  style={this.textInformationStyle}>{'Total Income: ' + '$' + this.totalIncomeDollarAmount.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
        <div style={this.textTitleStyle}>Expenses</div>
        <table style={this.tableStyle} id='expense'>
          <tbody>
            {this.state.expenseArray}
          </tbody>
          <tbody>
              <tr>
                <td style={this.textInformationStyle}>{'Total Expenses: ' + '$' + this.totalExpenseDollarAmount.toFixed(2)}</td>
              </tr>
          </tbody>
        </table>
        <div style={this.remainderStyle} id='expense'>{'REMAINDER: ' + this.finalDollarAmount}</div>
      </div>
    )
  } else return null
}
}
ReactDOM.render(<RotatingCircles />, document.getElementById('app'))
