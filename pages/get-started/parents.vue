<template> <v-container style="min-height:750px">
    <v-row>
      <v-col sm="12" md="4" class="pa-4 mt-6 d-none d-md-flex">
        <LefthandNav section="getStarted"></LefthandNav>
      </v-col>
      <v-col cols="12" md="8">
        <div class="hdr">Parents</div>
        <hr class="hrr"></hr>
          <b>Please Volunteer</b>
          <ul>
            <li>FarWest Freestyle is run by volunteer parents and assisted by teams’ coaches. As the parent of an athlete competing in freestyle events you’ll become a key member of fun and dedicated community known for rolling its sleeves to make competitions happen. The events require countless hours of preparation from setting up the course and installing equipment, to helping with check-in and distributing bibs, to hand-timing and picking-up lunches for the judges and officials.</li>
            <li>We rely extensively on the support of parent volunteers to assist with the numerous jobs required to put on a good event, and strongly encourage all parents of competitors to volunteer in one capacity or another.</p>
        <p>Below are the 2019/2020 Season volunteer signup sheets</p>
        <p>
          <b>EVENT 1</b>
          <ul>
            <li><a href="https://www.signupgenius.com/go/9040F4CA9A82DAAF85-friday" target="_blank">Friday January 3, 2020 @ Squaw</a></li>
            <li><a href="https://www.signupgenius.com/go/9040F4CA9A82DAAF85-saturday" target="_blank">Saturday January 4, 2020 @ Squaw</a></li>
          </ul>
        </p>
        <p>
          <b>EVENT 2</b>
          <ul>
            <li><a href="https://www.signupgenius.com/go/9040F4CA9A82DAAF85-saturday1" target="_blank">Saturday January 25, 2020 @ Northstar</a></li>
            <li><a href="https://www.signupgenius.com/go/9040F4CA9A82DAAF85-sunday" target="_blank">Sunday January 26, 2020 @ Northstar</a></li>
          </ul>
        </p>
        <p>
          <b>EVENT 3</b>
          <ul>
            <li><a href="https://www.signupgenius.com/go/9040F4CA9A82DAAF85-saturday2" target="_blank">Saturday February 1, 2020 @ Squaw</a></li>
            <li><a href="https://www.signupgenius.com/go/9040F4CA9A82DAAF85-sunday1" target="_blank">Sunday February 2, 2020 @ Squaw</a></li>
          </ul>
        </p>
        <p>
          <b>EVENT 4</b>
          <ul>
            <li><a href="https://www.signupgenius.com/go/9040F4CA9A82DAAF85-saturday3" target="_blank">Saturday February 22, 2020 @ Northstar</a></li>
            <li><a href="https://www.signupgenius.com/go/9040F4CA9A82DAAF85-sunday2" target="_blank">Sunday February 23, 2020 @ Northstar</a></li>
          </ul>
        </p>
        <p>
          <b>EVENT 5</b>
          <ul>
            <li><a href="https://www.signupgenius.com/go/9040F4CA9A82DAAF85-saturday4" target="_blank">Saturday April 4, 2020 @ Squaw</a></li>
            <li><a href="https://www.signupgenius.com/go/9040F4CA9A82DAAF85-sunday3" target="_blank">Sunday April 5, 2020 @ Squaw</a></li>
          </ul>
        </p>
      </li>
    </ul>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import LefthandNav from '@/components/lefthand-nav';

export default {
  layout: 'secondary',
  components: {
    LefthandNav
  },
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
