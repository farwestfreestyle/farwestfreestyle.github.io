<template>
  <v-container style="min-height:750px">
    <v-row>
      <v-col cols="12" md="4" class="pa-4 mt-6 d-none d-md-flex">
        <LefthandNav section="about"></LefthandNav>
      </v-col>
      <v-col cols="12" md="8">
        <div class="hdr">Contact Us</div>
        <hr class="hrr"></hr>
        <p>We communicate with the athletes, parents and volunteers principally via email, generally to distribute information about events. You may also be receiving information about events from your club/team.</p>
        <p>Our email address is admin@farwestfreestyle.com</p>
        <ul>
          <li>Please sign up for the <a href="https://mailchi.mp/28682dc10752/ussafarwestfreestyle" target="mail">FarWest Freestyle emails</a> and important updates.</li>
          <li>Please add admin@farwestfreestyle.com to your address book (to avoid having our emails go into your junk folder)</li>
        </ul>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'
import LefthandNav from '@/components/lefthand-nav';

const touchMap = new WeakMap()

export default {
  layout: 'secondary',
  components: {
    LefthandNav
  },
  data () {
    return {
      name: '',
      email: ''
    }
  },
  validations: {
    name: {
      required,
    },
    email: {
      required,
      email
    }
  },
  computed: {
    nameErrors () {
      const errors = []
      if (!this.$v.name.$dirty) { return errors }
      !this.$v.name.minLength && errors.push('Name must be at least 4 characters long')
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) { return errors }
      !this.$v.email.required && errors.push('Email is required.')
      !this.$v.email.email && errors.push('Email must be in valid format.')
      return errors
    },
    submitDisabled () {
      console.log('name invalid', this.$v.name.$invalid)
      console.log('email invalid', this.$v.email.$invalid)
      return this.$v.name.$invalid || this.$v.email.$invalid
    }
  },
  methods: {
    send () {
      console.log('send')
    },
    delayTouch ($v) {
      $v.$reset()
      if (touchMap.has($v)) {
        clearTimeout(touchMap.get())
      }
      if (this.hasError) {
        // if user is typing let's get rid of error
        this.$store.dispatch('resetError')
        // and reset submitted flag
        this.submitted = false
      }
      touchMap.set($v, setTimeout($v.$touch, 1000))
    },
  }
}

</script>
<style lang="scss">
.link > div {
    color: black !important;
  }
  .link:hover > div {
    text-decoration: underline;
  }
  .selected {
    font-weight: bold;
  }
  .selected:hover > div {
    text-decoration: none !important;
  }
</style>
