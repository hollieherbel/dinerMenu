class Snack {
    constructor({sweet, salty}) {
      this.sweet = sweet;
      this.salty = salty;
    };
  
    renderSnacks() {
      console.log(`Would you like ${this.sweet} or ${this.salty} for a snack today?`)
    };
  
    static(afternoon) {
      console.log(afternoon.salty === 'chips');
    }; 
  }
  
  const holliesSnack = new Snack({sweet: 'fruit', salty: 'cheese'})
  
  holliesSnack.renderSnacks();
  
  const oliviasSnack = new Snack({sweet: 'yogurt', salty: 'crackers'})
  
  oliviasSnack.renderSnacks();
  
  const morgansSnack = new Snack({sweet: 'cookies', salty: 'pretzels'})
  
  morgansSnack.renderSnacks();