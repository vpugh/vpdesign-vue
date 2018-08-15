<template>
  <div class="about x-tp">
    <div class="container">
        <div class="section-inner">
            <h2 class="head">Studio Services</h2>
            <p>The services we provide help you build enduring, engaging, and intuitive products. Making us a reliable option for consults, design, and/or development for your digital products.</p>
            <p>We love to experiment and try something different and new. We love working with those looking to push the envelope. We have tried and true methods but can also adapt to your setup, provided it's the best for you and your situation.</p>
            <p><router-link class="text-link" to="">Design</router-link> | <router-link class="text-link" to="">Development</router-link> | <router-link class="text-link" to="">Marketing</router-link> | <router-link class="text-link" to="">Consulting</router-link></p>
        </div>
        <div class="fullwidth-image">
			<img id="designservice" src="http://victoriapugh.net/images/gallery/test-image-bg.jpg" alt="">
		</div>
        <div class="section-inner">
            <h3 class="subhead">Design Services</h3>
            <p>Design is more than making something look pretty, it's delving deep into what makes your business and/or product tick and how to communicate that to your customer base.</p>
            <p>This starts, always, with research into you and your product. From there we use the research and work with you to decide what direction you want your branding/company to go. This includes getting into the specifics of your who is your target audience/users and how to best reach them.</p>
            <p>Then it's a case of providing the best experience for your customers and a product that will grow your company. Not only making a beautiful experience but an easy, intuitive, rememberable one. Something that takes all the information we've obtained into account and puts the user first and foremost in the design.</p>
            <div class="listed-service">
            <p>Consultation • Creative Direction • Branding • Product Design • User Experience (UX) • User Interface (UI) • Interaction Design • Design Strategy</p>
            </div>
        </div>
        <div class="fullwidth-image">
			<img src="http://victoriapugh.net/images/gallery/test-image-bg.jpg" alt="">
		</div>
        <div class="section-inner">
            <h3 class="subhead">Development Services</h3>
            <p>For web development, the amount of tools to get any job done are near endless in this day-and-age. If required we don't mind working in your current setup or something specific you have in mind. Otherwise we strive to always use whatever tools are best suited for you and your business. We can let your update your site or if you want us to do that we can. There are many options and we love experimenting, are flexible and open to learning something new.</p>
            <div class="listed-service">
            <p>Web Development • Content Management Systems (CMS) • Wordpress</p>
            </div>
        </div>
        <div class="fullwidth-image">
			<img src="http://victoriapugh.net/images/gallery/test-image-bg.jpg" alt="">
		</div>
        <div class="section-inner">
            <h3 class="subhead">Digital Marketing</h3>
            <p>Digital marketing can mean a lot of things, my specilization is in email. Creating a good looking and high performing email is a balancing act. Each audience is difference, so from research and understanding to actual restraints of who your delivering to. Email development is difficult with all the legal rules and regulations for sending to and maintaining peoples information. We are well versed in what you need to know, what you should and should not do, and how to best reach your customers and get them to engage with your emails.</p>
            <div class="listed-service">
            <p>Email Design • Email Development • List Management • Email Campaigns</p>
            </div>
        </div>
    </div>
    <FooterContact/>
    <Footer/>
  </div>
</template>

<script>
import FooterContact from "@/components/FooterContact.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "services",
  components: {
    FooterContact,
    Footer
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/test2.scss";
.about {
  padding: 9rem 0 6rem 0;
}
</style>
