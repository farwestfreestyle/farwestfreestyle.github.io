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
            <li>Upon your registering your athlete as a member of FarWest Freestyle, we’ll put you in contact with the division’s volunteer coordinator to gradually get you involved from the Cheering Squad to the Chopping Crew.

              <p>Insert link to FarWest Freestyle Official Positions and Volunteer Assignments document</p>
            </li>
          </ul>
          <b>Become an Official!</b>
          <li>Getting Started: Why become a US Ski and Snowboard judge or official? Taking part as a competition judge or official is exciting -- it brings you into the heart of the action! And it's a way of helping the hundreds of young athletes who enter US Ski & Snowboard competitions to have fun and to achieve personal goals.</li>
          <li>Join US Ski and Snowboard - It's simple to get started. Just join the US Ski and Snowboard as an official. And work with your FarWest Freestyle US Ski and Snowboard representative to participate in clinics and to volunteer at an entry-level position.</li>
          <li>Who becomes a US Ski and Snowboard judge or official? Oftentimes it starts with parents of young athletes who want to be more actively involved. Former athletes and coaches are also great candidates with their background in the sport. But it can be anyone who has an interest in helping young athletes and playing an important role in their success.</li>
          <li>What Do Judges and Officials Do?</li>
            <ul>
              <li>Judges and officials ensure that US Ski and Snowboard competitions run efficiently and fairly by the rules. They are responsible for the safe conduct of the event and the accurate timing, judging and scoring. They also play a key role in ensuring that the spirit of the sport and competition is maintained. In the end, judges and officials are responsible for providing the best possible experience for US Ski and Snowboard athletes.</li>
            </ul>
          <li>Advancement: Judges and officials are a lot like athletes. Once you start, you'll want to increase your level of expertise. The US Ski and Snowboard offers a wide range of local, divisional and regional clinics where you can learn new skills and take on new positions. Various levels of officials' certification are offered by the US Ski and Snowboard in each of its sports programs. As you grow in experience as a US Ski and Snowboard judge or official, you may want to consider becoming certified internationally as a FIS (International Ski Federation) judge or official. FIS officials work international events domestically and may be considered for international assignments.</li>
          </li>
          <li>To learn more about judging freestyle mogul events and participating in a clinic, contact: <a href="mailto:bigsearch@gmail.com">Chuck Search</a></li>
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
