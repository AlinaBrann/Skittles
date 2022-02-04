<template>
  <div class="parallax-candies">
    <div 
      v-for="item in candies"
      :key="item"
      class="parallax-candies__candy"
      :class="'_' + item">
      <img 
        :src="require(`../assets/images/${item}-comp.png`)"
        :srcset="require(`../assets/images/${item}-comp@2x.png`)" 
        alt=""
      >
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      candies: [
        'orange',
        'purple',
        'green',
        'red',
        'yellow'
      ]
    }),
    methods: {
      goAway(elem) {
        
        let elemLeft, elemTop, maxElemLeft, maxElemTop;

        maxElemLeft = Math.floor(Math.random() * 200); 
        maxElemTop = Math.floor(Math.random() * 200);
        
        elemLeft = Math.random() * maxElemLeft;
        elemTop = Math.random() * maxElemTop;
        elem.style.transform = 'translate(' + elemLeft + 'px, ' + elemTop + 'px)';          
      },
      goBack(elem) {
        elem.style.transform = 'translate(' + 0 + 'px, ' + 0 + 'px)';          
      }
    },
    mounted() {
      const parallaxBloks = document.querySelectorAll(".parallax-candies__candy");
      const $this = this;
      parallaxBloks.forEach(function (move) {
        move.addEventListener('mouseover', function() {
          $this.goAway(move)
        })
        move.addEventListener('mouseout', function() {
          setTimeout(() => {
            $this.goBack(move)
          }, 1000);
          
        })
      })

      
    },
  }
</script>

<style lang="scss" scoped>
  .parallax-candies {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    &__candy {
      position: absolute;
      transition: 1s ease-out;
      user-select: none;
      z-index: 0;
      &._orange {
        width: rem(45px);
        top: 120px;
        left: 5%;
      }
      &._purple {
        width: rem(60px);
        top: 200px;
        right: -5%;
      }
      &._red {
        width: rem(53px);
        top: 480px;
        left: -2%;
      }
      &._yellow {
        width: rem(55px);
        top: 810px;
        left: 2%;
      }
      &._green {
        width: rem(65px);
        top: 1220px;
        right: 3%;
      }
      img {
        animation: candy 5s ease-in-out infinite;
      }
      &:nth-child(2n) {
        img {
          animation: fruitReverse 3s ease-in-out infinite;
        }
      }
      @media (min-width: $sm) {
        z-index: 1;
        &._orange {
          width: rem(55px);
          top: 33vh;
          left: 16%;
        }
        &._purple {
          width: rem(88px);
          top: 21vh;
          right: 10.5%;
        }
        &._red {
          width: rem(63px);
          top: 41vh;
          left: 5.5%;
        }
        &._yellow {
          width: rem(65px);
          top: 69vh;
          left: 11%;
        }
        &._green {
          width: rem(85px);
          top: 74vh;
          right: 3.5%;
        }
      }
    }
  }
    
  $deg: 10deg;
  @keyframes candy {
    0%,
    100% {
      transform: translate(0%,-7%) rotate(5deg);
    }
    50% {
      transform: translate(0%,7%) rotate(-5deg);
    }
  }
  @keyframes fruitReverse {
    0%,
    100% {
      transform: translate(0%,9%) rotate(-5deg);
    }
    50% {
      transform: translate(0%,-9%) rotate(5deg);
    }
  }

</style>