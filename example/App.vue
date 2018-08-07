<template>
  <div v-text="number"/>
</template>

<script>
import noE from '../src/index'
export default {
  data () {
    return {
      number: [
        noE(123),
        noE(19e-8),
        noE(9e-8),
        noE(1.99714e13),
        noE(1.99714e-13),
        noE(1.997141231235123512351627356712e10),
        noE('1.1e10'),
        noE('1e10'),
        noE('1.997141231235123512351627356712e1'),
        noE('1.997141231235123512351627356712e+2')
      ]
    }
  }
}
</script>
