const SpringApp = {
      data() {
        return {
          counter: 0,
          imgSrc: "img/spring-melt-off.png",
          imgAlt: "Girdwood slowly melts in May. We call this the mud season.",
          imgSrc2: "img/spring-melt-off.jpg",
          imgAlt2: "All the snowman melt away in the spring.",
          imageShowing: true,
          springtodos:[
            {text: 'let snow melt'},
            {text: 'scoop up old dog poo'},
            {text: 'get in last minute spring skiing'},
          ]

        }
      },
      methods: {
        toggleImage() {
          if (this.imageShowing) {
            this.imageShowing = false
          } else {
            this.imageShowing = true
          }
        }
      }
    }


    Vue.createApp(SpringApp).mount('#spring')

    const SummerApp = {
          data() {
            return {
              counter: 0,
              imgSrc: "img/first-bloom.png",
              imgAlt: "First Blooms start to appear mid to late May in Girdwood, Alaska",
              imgSrc2: "img/first-bloom.jpg",
              imgAlt2: "Crocus will push through the snow being one of the first to bloom",
              imageShowing: true,
              summertodos:[
                {text: 'Iris'},
                {text: 'Tulips'},
                {text: 'Crocus'},
                {text: 'Blueberry Bushes'},
              ]

            }
          },
          methods: {
            toggleImage() {
              if (this.imageShowing) {
                this.imageShowing = false
              } else {
                this.imageShowing = true
              }
            }
          }
        }


        Vue.createApp(SummerApp).mount('#summer')
