<template>
  <div>    
    <section class="container" :style="{ backgroundImage: `url(${require('~/../static/images/background-heli.svg')})`}">
      <div class="top">
        <h1><a id="info">Our Vision</a></h1>
        <h1><a id="info2">Our Mission</a></h1>
        <p id='vision'><pre style="font-family: var(--font-family)">
To be an original Equipment Manufacturer for the next generation of integrated 
hybrid turbo-electric power and propulsion systems. 
        
To be a highly capable engineering company that offers affordable and effective 
solutions for Legacy Aircraft.</pre></p>
        <p id='mission'><pre style="font-family: var(--font-family)">
To develop engineering solutions for Legacy Aircraft and provide on
schedule, on budget, right the first-time delivery to customers.

To develop internal capabilities through experience on a variety of
products, systems, components, specialties.

To increase our technology and production readiness for novel solutions
through R&D.  </pre></p>
        <h1><a id="info3">Why Choose Us?</a></h1>
        <p id='why'><pre style="font-family: var(--font-family)">
At XL Aero, we are commited to operating in a manner that prevents environmental or safety and health (ESH) accidents and incidents. We actively manage 
risk, conserving natural resources, protecting the environment, and ensuring the safety of our employees, contractors and the public. 

We deliver high quality  products and services and pride ourselves in getting it right the first time. This includes meeting requirements on schedule and on 
budget, while providing the best customer experience possible. We comply with all regulatory standards, perform rigorous root cause analysis and effectively 
“close the loop” on all findings of non-compliance. </pre></p>      
      </div>
      <div class="middle">
        <h1><a id=team>Our Team</a></h1>
        <p id='ourteam'><pre style="font-family: var(--font-family)">
  Tim Blaskovich - President
      tim@xlaero.ca
  Dane Wassell - Mechanical Design Engineer
      dane@xlaero.ca
  Corbin Meier - Mechanical Design Engineer
      corbin@xlaero.ca
  Ana Santos Pérez - Mechanical Design Engineer
      ana@xlaero.ca
  Jonathan Schiffner - Finance & IT
      finance@xlaero.ca
  Brenda Cichon - Administrative Assistant
      brenda@xlaero.ca
        </pre></p>
        <img src="../../static/images/teampic.jpg" alt="The team!" id="teampic">
      </div>
      <div class="bottom">
        <img src="../../static/images/timeline.png" alt="Timeline" id="timeline">
        <p id='tim'><pre style="font-family: var(--font-family)">
Tim Blaskovich founded XL Aero in 2015. Certified as a Design Approval 
Representive under DAR #375 and an Approved Manufacturer under CAR #561,
he started this company not only to be at the forefront of technical innovation in 
aircraft and propulsion systems, but also to fulfill his passion for engineering and 
creating technical solutions. Tim holds a M.Eng from McGill University and has 
worked for over 26 years in key positions in companies such as Pratt & Whitney 
and CHC Helicopter in the turbine and aviation sectors.</pre></p>
        <figure>
          <img src="../../static/images/tim.jpg" alt="The Boss" id="boss">
          <figcaption style="text-align: center">Tim Blaskovich, President & Founder</figcaption>
        </figure>
        <img src="../../static/images/DAR.png" alt="DAR" id="DAR">
        <img src="../../static/images/CAR.jpg" alt="CAR" id="CAR">
      </div>
    </section>  
    <Footer id="footer"/>
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue'

export default {
  metaInfo: {
    title: 'XLaero - Contact'
  },
  components: {
    Footer
  }

  }
</script>

<style lang="scss" scoped>
    .top {
      margin-top: -5%;
      display: grid;
      grid-gap: 0%;
      grid-template-areas: 
        "info info2"
        "vision mission"
        "info3 ."
        "why why"
    }

    .middle {
      display: grid;
      overflow: hidden;
      grid-template-areas: 
        "teamheader . teampic"
        "team . teampic"
    }
    
    .bottom {
        display: grid;
        grid-column-gap: 0px;
        grid-template-columns: repeat(5,fr);
        grid-template-areas:
          "timeline boss tim tim tim"
          "timeline boss tim tim tim"
          "timeline dar dar car car"
          "timeline dar dar car car"
    }
    
    #info {
      grid-area: info;
    }
    #info2 {
      grid-area: info2;
    }
    #info3 {
      grid-area: info3;
    }
    #vision {
      margin-top: -2%;
      grid-area: vision;
    }
    #mission {
      margin-top: -2%;
      grid-area: mission;
    }
    #why {
      margin-top: -2%;
      grid-area: why;
    }
    #team {
      grid-area: teamheader;
    }
    #ourteam {
      grid-area: team;
      margin-top: -15%;
    }
    #teampic {
      grid-area: teampic;
      object-fit: cover;
      width: 720px;
      height: auto;
      margin-left: 10%;
    }
    #timeline {
      object-fit: cover;
      grid-area: timeline;
      width: 300px;
      height: auto;
    }
    #tim {
      grid-area: tim;
      text-align: center;
      margin-top: 10%;
      font-size: 90%;
    }
    #DAR {
      grid-area: dar;
      width: 350px;
      height: auto;
      margin-left: 80px;

    }
    #CAR {
      grid-area: car;
      width: 350px;
      height: auto;
      border: 2px solid black;
      margin-left: 80px;
    }
    #boss {
      grid-area: boss;
      width: 300px;
      height: auto;
      padding: 10% 0% 0% 15%;
    }
    .container {
        padding: var(--spacing-25);
    }

</style>