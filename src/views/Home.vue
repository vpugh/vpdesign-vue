<template>
  <div class="home">
    <HeroHeader title="Creating websites and digital products that promote customer growth and engagement." subtitle="Specializing in digital design, development and strategy to create a product that puts the user first and makes things run better." :pattern='bgPattern()' />
    <div class="container portfolio">
      <ul class="">
        <ImageGrid v-for="(works, index) in work" :key="index" :thumbnailUrl='works.worklink' :thumbnailSrc="works.img2x" :thumbnailTitle="works.title" :thumbnailType="works.type" :thumbnailDesc="works.description" />
      </ul>
    </div>
    <div class="accent-bg">
        <div class="container specialties">
            <h2 class="subheadline">Offered <router-link class="text-link" to="/services">Services</router-link></h2>
            <div class="grid grid--3col">
                <div>
                    <h3>Design</h3>
                    <p>UX/UI Design</p>
                    <p>Website Design</p>
                    <p>Interaction Design</p>
                </div>
                <div>
                    <h3>Development</h3>
                    <p>Web Development</p>
                    <p>Content Management Systems</p>
                    <p>Progressive Web Apps (PWA)</p>
                </div>
                <div>
                    <h3>Digital Marketing</h3>
                    <p>Email Development</p>
                    <p>Email Campaigns</p>
                </div>
            </div>
            
        </div>
    </div>
    <div class="container blog">
        <!-- <h3 class="subheadline">Recent <a class="text-link" href="/blog">Blog Posts</a></h3> -->
        <h3 class="subheadline">
          Recent <router-link to="/blog" class="text-link">Blog Posts</router-link>
        </h3>
        <ul class="grid grid--3col grid-gap-30">
            <BlogGrid v-for="(article, index) in articles" :key="index" :articleLink="article.link" :articleCover="article.cover" :articleTitle="article.title" :articleDate="article.date" />
        </ul>
    </div>
    <FooterContact/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeroHeader from "@/components/HeroHeader.vue";
import ImageGrid from "@/components/ImageGrid.vue";
import BlogGrid from "@/components/BlogGrid.vue";
import FooterContact from "@/components/FooterContact.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "home",
  components: {
    HeroHeader,
    ImageGrid,
    BlogGrid,
    FooterContact,
    Footer
  },
  data() {
    return {
      currentPattern: "",
      work: [
        {
          worklink: "/work/ucd",
          img1x: "http://toripugh.com/images/Thumbnails/updates@1x.jpg",
          img2x: "http://toripugh.com/images/Thumbnails/updates@2x.jpg",
          type: "Case Study",
          title: "Updates in Clinical Dentistry",
          description: "Creating Cohesive Marketing for a Nationwide Conference"
        },
        // {
        //   worklink: "/work/pomodoro",
        //   img1x: "http://toripugh.com/images/Thumbnails/pomodoro@1x.jpg",
        //   img2x: "http://toripugh.com/images/Thumbnails/pomodoro@2x.jpg",
        //   type: "Case Study + Github Pages",
        //   title: "Pomodoro Timer App",
        //   description: ""
        // },
        {
          worklink: "/work/cdew-redesign",
          img1x: "http://toripugh.com/images/Thumbnails/cdeworld@1x.jpg",
          img2x: "http://toripugh.com/images/Thumbnails/cdeworld@2x.jpg",
          type: "Case Study",
          title: "CDEWorld Redesign",
          description: "Reimagining and Elevating Dental Learning"
        },
        {
          worklink: "/work/emailgui",
          img1x: "http://toripugh.com/images/Thumbnails/emailgui@1x.jpg",
          img2x: "http://toripugh.com/images/Thumbnails/emailgui@2x.jpg",
          type: "Case Study + CodePen",
          title: "BespokeMail GUI",
          description:
            "Building a System to Take the Hassle Out of Maintaining Emails"
        },
        // {
        //   worklink: "/work/vpdesigns",
        //   img1x: "http://toripugh.com/images/Thumbnails/vpdesigns@1x.jpg",
        //   img2x: "http://toripugh.com/images/Thumbnails/vpdesigns@2x.jpg",
        //   type: "Case Study",
        //   title: "VP-Designs",
        //   description: ""
        // },
        // {
        //   worklink: "/work/invoice",
        //   img1x: "http://toripugh.com/images/Thumbnails/invoice@1x.jpg",
        //   img2x: "http://toripugh.com/images/Thumbnails/invoice@2x.jpg",
        //   type: "Case Study + CodePen",
        //   title: "Temp Time Assistant",
        //   description: ""
        // },
        {
          worklink: "/work/uniag",
          img1x: "http://toripugh.com/images/Thumbnails/iagny@1x.jpg",
          img2x: "http://toripugh.com/images/Thumbnails/iagny@2x.jpg",
          type: "Case Study",
          title: "United Nations: Inter-Agency Games",
          description: "Building a more accessibile site for global enjoyment"
        }
        //{
        //worklink: '/work/interstice',
        //img1x: 'http://toripugh.com/images/Thumbnails/interstice.jpg',
        //img2x: 'http://toripugh.com/images/Thumbnails/interstice@1x.jpg',
        //type: 'Case Study',
        //title: 'Interstice',
        // description: ""
        //},
        // {
        //   worklink: "/work/newsletters",
        //   img1x: "http://toripugh.com/images/Thumbnails/email-templates@1x.jpg",
        //   img2x: "http://toripugh.com/images/Thumbnails/email-templates@2x.jpg",
        //   type: "Case Study",
        //   title: "Email Templates",
        //   description: ""
        // }
      ],
      articles: [
        {
          title: "The Potential for AR in Professional Settings",
          date: "February 28, 2018",
          link:
            "https://medium.com/@teekatwo/the-potential-for-ar-in-professional-settings-e0f4e1793992",
          cover: "https://cdn-images-1.medium.com/max/1000/0*NLqoCHrAWrIzOsKm.",
          source: "Medium"
        },
        {
          title: "Are You Solving the Real Problem",
          date: "February 21, 2018",
          link:
            "https://medium.com/@teekatwo/are-you-solving-the-real-problem-941a1c36c1d5",
          cover:
            "https://cdn-images-1.medium.com/max/1000/1*rYqxGE8b5_lxlvF4OoE_AA.jpeg",
          source: "Medium"
        },
        {
          title: "What You Shouldn't do With Mailing Lists",
          date: "February 13, 2018",
          link:
            "https://medium.com/@teekatwo/what-you-shouldnt-do-with-mailing-lists-91a52d89cc56",
          cover:
            "https://cdn-images-1.medium.com/max/2000/1*2Oo1Din32plTMdI8GypK4Q.jpeg",
          source: "Medium"
        },
        {
          title: "Emails aren't as simple as you think",
          date: "January 17, 2018",
          link:
            "https://medium.com/@teekatwo/emails-arent-as-simple-as-you-think-987c6dfeb09e",
          cover:
            "https://cdn-images-1.medium.com/max/1000/1*fXBo56b0tanSCNHo4O2eWw.jpeg",
          source: "Medium"
        },
        {
          title: "Using Social Media to Your Advantage",
          date: "December 18, 2017",
          link:
            "https://medium.com/@teekatwo/using-social-media-to-your-advantage-446598468375",
          cover:
            "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6354c26fa366d6b456db1d7cf1137c89&auto=format&fit=crop&w=1053&q=80",
          source: "Medium"
        },
        {
          title: "Mastering the art of admitting you don't know something",
          date: "October 8, 2017",
          link:
            "https://medium.com/@teekatwo/mastering-the-art-of-admitting-you-dont-know-something-1148066ef200",
          cover:
            "https://cdn-images-1.medium.com/max/1000/1*w62y9KpG8denATsB-J0bRQ.jpeg",
          source: "Medium"
        },
        {
          title: "How to Explain What Design is to Non-Designers",
          date: "September 23, 2017",
          link:
            "https://medium.com/@teekatwo/how-to-explain-what-design-is-to-non-designers-72838fc12b09",
          cover:
            "https://images.unsplash.com/photo-1518893494013-481c1d8ed3fd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d37f41df10af558fe79a662a07c7de3f&auto=format&fit=crop&w=400&q=60",
          source: "Medium"
        },
        {
          title: "Be Tron: Fight for the User | aka Be a User Advocate",
          date: "September 11, 2017",
          link:
            "https://medium.com/@teekatwo/be-tron-fight-for-the-user-f96efc142876",
          cover:
            "https://cdn-images-1.medium.com/max/800/1*6CyTuYz0D92cl4ynXjW45A.jpeg",
          source: "Medium"
        }
      ]
    };
  },
  methods: {
    bgPattern() {
      let app = document.getElementById("app");
      let currentPattern = "";

      if (app.classList.contains("blue")) {
        currentPattern = "pattern5";
      } else if (app.classList.contains("green")) {
        currentPattern = "pattern4";
      } else {
        currentPattern = "pattern3";
      }
      return currentPattern;
    }
  },
  created() {
    this.bgPattern();
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/layouts/homepage";
</style>
