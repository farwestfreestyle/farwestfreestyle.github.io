<template>
  <v-container style="min-height:800px">
    <v-row align="center" justify="center">
      <v-img height="300" src="/images/squawfree-hero-image.jpg"></v-img>
    </v-row>
    <v-row>
      <v-col sm="12" md="4" class="pa-4 mt-6 d-none d-md-flex">
        <LefthandNav section="clubs"></LefthandNav>
      </v-col>
      <v-col sm="12" md="8">
        <div class="hdr">Olympic Valley Freestyle</div>
        <hr class="hrr"></hr>
        <p>The Olympic Valley Freestyle and Freeride Team also known as OVFree, is a 501(c)3 non-profit organization that promotes all forms of Freestyle skiing (moguls, big mountain, park) to individuals of all ages and skill levels.</p>
        <h4>MISSION</h4>
        <p>OVFree inspires and empowers freestyle skiers, young and old, to achieve their full athletic potential through fun, safe, high-level quality training programs and challenging competitive opportunities.</p>
        <h4>ABOUT US</h4>
        <p>Skier participation helps our athletes grow, learn, and enjoy themselves while they use and develop their personal and physical abilities. At OVFree we value the deep history of Squaw Valley, the highest level of coaching, and the lessons learned from more than 30 years of experience. The pursuit of excellence through personal development, teamwork, commitment, accountability and respectful behavior on the hill and in the community portrays a sense of pride and integrity. We recognize winning is not the end, but the lessons learned within our program will help the athletes succeed later in life.</p>

        <h4>TESTIMONIALS</h4>
        <p>“OVFree is the original freestyle program. We learned all the fundamentals from a crew of passionate coaches who I still have as mentors and friends today. The years of experience progressing kids through the changing landscape of freestyle and freeskiing safely is something I do not see in the other programs I have witnessed. I am psyched that my ten year old son is getting the proper coaching to match his interest in freestyle and freeskiing. In addition to the fun experience in the SquawFree locker room and on the hill, the program has produced three of the 7 American Olympic medals in moguls among other accolades. Awesome.”</p>
        <p>- Jonny Moseley (1998 Olympic Gold Medalist)</p>
        <p>“Being on the Squaw Valley Freestyle Team was the perfect team for me.  Not only did I absolutely fall in love with the sport of skiing but it taught me how to face my fears, how to be a good teammate, how to work hard when I wanted to win and how to persevere when I lost.  But most importantly it gave me a community of like minded kids that embraced the mountain life and all of the wonderful things it offered.”</p>
        <p>– Shannon Bahrke (three time Olympian and two time Olympic Medalist)</p>
        <div class="text-center">
          <v-btn href="http://www.squawfree.org">Visit Team Site</v-btn>
        </div>
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
