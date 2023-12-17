<template>
    <div id="branches" class="bg-whitewash pt-10 pb-0 md:pb-24">
        <h1 class="font-Judson text-5xl font-bold text-center text-zucchini md:text-6xl"> find your <br class="md:hidden"> nearest branch</h1>
        <div class="container">
          <div class="panel branch-table">
            <div class="branch-plan">
                <span class="branch-name">main salon</span>
                <img src="../assets/images/branch-1.jpg" alt="" class="branch-img">
                <h2 class="branch-address">800 Hope Street, <br> Providence, RI</h2>
                <ul class="branch-services">
                    <li class="branch-services-item">Hair Styling, Facials, Massage, Nails </li>
                    <li class="branch-services-item">All Tables Available</li>
                </ul>
                
                <button class="branch-book-btn">
                    BOOK NOW!
                </button>
            </div>
            
            <div class="branch-plan">
                <span class="branch-name">downtown spa</span>
                <img src="../assets/images/branch-2.jpg" alt="" class="branch-img">
                <h2 class="branch-address">120 Elm Street, <br> Providence, RI</h2>
                <ul class="branch-services">
                    <li class="branch-services-item">Hair Styling, Facials, Massage, Nails</li>
                    <li class="branch-services-item">All Tables Available</li>
                </ul>
                
                <button class="branch-book-btn">
                    BOOK NOW!
                </button>
            </div>
            
            <div class="branch-plan">
                <span class="branch-name">seaside retreat</span>
                <img src="../assets/images/branch-3.jpg" alt="" class="branch-img">
                <h2 class="branch-address">45 Ocean View Avenue, <br> Newport, RI</h2>
                <ul class="branch-services">
                    <li class="branch-services-item">Hair Styling, Facials, Massage, Nails</li>
                    <li class="branch-services-item">All Tables Available</li>
                </ul>
                
                <button class="branch-book-btn">
                    BOOK NOW!
                </button>
            </div>
          </div>
        </div>
    </div>
</template>

<script setup>
</script>


<style scoped>
#branches {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='24' viewBox='0 0 88 24'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='autumn' fill='%23a5c99c' fill-opacity='0.06'%3E%3Cpath d='M10 0l30 15 2 1V2.18A10 10 0 0 0 41.76 0H39.7a8 8 0 0 1 .3 2.18v10.58L14.47 0H10zm31.76 24a10 10 0 0 0-5.29-6.76L4 1 2 0v13.82a10 10 0 0 0 5.53 8.94L10 24h4.47l-6.05-3.02A8 8 0 0 1 4 13.82V3.24l31.58 15.78A8 8 0 0 1 39.7 24h2.06zM78 24l2.47-1.24A10 10 0 0 0 86 13.82V0l-2 1-32.47 16.24A10 10 0 0 0 46.24 24h2.06a8 8 0 0 1 4.12-4.98L84 3.24v10.58a8 8 0 0 1-4.42 7.16L73.53 24H78zm0-24L48 15l-2 1V2.18A10 10 0 0 1 46.24 0h2.06a8 8 0 0 0-.3 2.18v10.58L73.53 0H78z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.container {
  margin: 0 auto;
  padding: 50px 0 0;
  width: 100%;
}

.panel {
  background-color: #FFFFFD;
  border-radius: 16px;
  position: relative;
}

@media only screen and (max-width: 768px) {
  .panel {
    border-radius: 0px;
  }
}
.branch-table {
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  display: flex;
  flex-direction: column;
}

@media (min-width: 1024px) {
  .branch-table {
    flex-direction: row;
  }
}

.branch-table * {
  text-align: center;
}

.branch-plan {
  border-bottom: 2px solid rgba(127, 158, 94, 0.5);;
  padding: 25px;
}

@media (max-width: 768px) {
  .branch-plan {
    padding: 25px 50px;
  }
}

.branch-plan:last-child {
  border-bottom: none;
}

@media (min-width: 1024px) {
  .branch-plan {
    border-bottom: none;
    border-right: 1px solid rgba(127, 158, 94, 0.2);;
    flex-basis: 100%;
    padding: 50px;
  }

  .branch-plan:last-child {
    border-right: none;
  }
}

.branch-name {
font-family: 'Judson', serif;
  color: #1A422B;
  display: block;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 8px;
}

@media (max-width: 1024px) {
  .branch-name {
    font-size: 30px;
  }
}

.branch-img {
  margin-bottom: 25px;
  max-width: 100%;
  border-radius: 8px;
}

@media screen and (max-width: 1024px) and (min-width: 768px) {
  .branch-img {
    max-width: 80%;
    margin-right: auto;
    margin-left: auto;
  }
}

.branch-address {
  color: #323232;
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
}

@media (max-width: 1024px) {
  .branch-address {
    font-size: 16px;
  }
}

.branch-services {
  color: #323232;
  font-weight: 600;
  letter-spacing: 1px;
  margin: 25px;
}

.branch-services-item {
  border-top: 1px solid rgba(127, 158, 94, 0.2);;
  font-size: 14px;
  line-height: 1.5;
  padding: 15px 0;
  text-transform: capitalize;
}

@media (max-width: 1024px) {
  .branch-services-item {
    font-size: 12px;
  }
}

.branch-services-item:last-child {
  border-bottom: 1px solid rgba(127, 158, 94, 0.2);;
}
.branch-book-btn {
    font-weight: bold;
    border-bottom: solid 2px #323232;
}

.branch-book-btn:hover {
    color: #1A422B;
    border-bottom: solid 2px #1A422B;
}

@media (max-width: 1024px) {
  .branch-book-btn {
    margin-bottom: 15px;
  }
}
</style>