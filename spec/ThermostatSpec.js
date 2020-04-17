describe('Thermostat', function() { 
var thermostat; 

  beforeEach(function() {  
    thermostat  = new Thermostat();
  });

  describe( 'temperature to start at 20', function(){
    it('returns 20', function(){
      expect(thermostat.startTemperature).toEqual(20)
    });
  });


  describe( '#upTemperature ', function() {
    it('increases the temperature - returns 21', function() {
      thermostat.upTemperature()
      expect(thermostat.temperature).toEqual(21);
    });
    
    it('maximium  increase in  temperature  (power save mode off) - it does not go above 32', function(){
      thermostat.changePowerSaveMode()
      for( i=0; i < 15; i++){
        thermostat.upTemperature();
      }
      expect(thermostat.temperature).toEqual(32)
    });

    it('maximium increase in temperature (power save mode on- it does not go above 25 when powersave mode button is on', function(){
      for( i=0; i < 15; i++){
        thermostat.upTemperature();
      }
      expect(thermostat.temperature).toEqual(25)
    });


  });

  describe('#downTemperature', function() {
    it(' decreases the temperature returns 17', function() {
      thermostat.downTemperature()
    expect(thermostat.temperature).toEqual(19) 
    });
    it('minimum temperature - it does not go below 10', function(){
      for( i=0; i < 11; i++){
        thermostat.downTemperature();
      }
      expect(thermostat.temperature).toEqual(10)
    });
      
    
  })



  describe('#is maximum temperature', function () {
    it('when power saving mode is on and temperature goes above 25 returns true ', function(){
    thermostat.temperature = 26
      expect(thermostat.isMaximumTemperature()).toEqual("MAX_TEMPERATURE_PSM_ON")
    })

    it('when power saving mode is off and temperature goes above 32 returns true', function() {
      thermostat.changePowerSaveMode()
      thermostat.temperature = 33
      expect(thermostat.isMaximumTemperature()).toEqual("MAX_TEMPERATURE_PSM_OFF")
    })

  });


  describe('#is minimum temperature', function () {
    it('when temperature goes below 10 returns true ', function(){
    thermostat.temperature = 9
      expect(thermostat.isMinimumTemperature()).toEqual(true)
    })
  });

  describe('power saving mode ', function() {
    it(' power saving mode is on by default  (returns true) ', function() {
      expect(thermostat.powerSaveMode).toEqual(true)
    })

    it('power saving mode can be turned off', function() {
      thermostat.changePowerSaveMode()
      expect(thermostat.powerSaveMode).toEqual(false)
    })

    it('power saving mode can be turned on', function() {
      thermostat.changePowerSaveMode()
      thermostat.changePowerSaveMode()
      expect(thermostat.powerSaveMode).toEqual(true)
    })

    it('does not go beyond 25', function(){
      for( i=0; i < 6; i++){
        thermostat.upTemperature();
      }
      expect(thermostat.temperature).toEqual(25)
    })

  });

  describe('#reset', function() { 
    it('when user resets the powerSaveMode is set  to default of on (true)', function(){
      thermostat.changePowerSaveMode()
      thermostat.reset()
      expect(thermostat.powerSaveMode).toEqual(true)
    })

    it('resets default start temperature', function(){
      thermostat.upTemperature(10)
      thermostat.reset()
      expect(thermostat.temperature).toEqual(20)
    })
  })


  describe ('usage', function  () {
    describe('#change usage', function () {
      it('changes usage propery to low usage when temperature < 18', function() {
        thermostat.temperature = 14
        thermostat.changeUsage()
        expect(thermostat.usage).toBe('low-usage')
      })
      it ('changes usage property to medium usage when temperature is above 18 and below 25', function(){
        thermostat.temperature = 14
        thermostat.usage
        thermostat.temperature = 22
        expect(thermostat.usage).toBe('medium-usage')
      })
      it('changes usage property high usage for temperatures higher than 24', function() {
        thermostat.temperature = 25
        thermostat.changeUsage()
        expect(thermostat.usage).toBe('high-usage')
      })
    })
    describe('show usage', function(){
      it('shows the usage status of low usage when temperature is under 18', function(){
        for( i=0; i < 6; i++){
          thermostat.downTemperature();
        }
        expect(thermostat.showUsage()).toEqual('low-usage')
      })
      it('shows the usage status of medium usage when temperature is under 24', function(){
        expect(thermostat.showUsage()).toEqual('medium-usage')
      })
      it('shows the usage status of high usage when temperature is 25 or above ', function(){
        for( i=0; i < 5; i++){
          thermostat.upTemperature();
        }
        expect(thermostat.showUsage()).toEqual('high-usage')
      })
    })
  })

}) 
