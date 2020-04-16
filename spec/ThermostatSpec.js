describe('Thermostat', function() { 
var thermostat; 

beforeEach(function() {  
  thermostat  = new Thermostat(20, 'on');
});

describe( 'temperature to start at 20', function(){
  it('returns 20', function(){
    expect(thermostat.getTemperature()).toEqual(20);
  });
});

describe( 'increases the temperature', function() {
  it('returns 22', function() {
    expect(thermostat.upTemperature(2)).toEqual(22);
  });
});

describe('decreases the temperature', function() {
  it('returns 17', function() {
  expect(thermostat.downTemperature(3)).toEqual(17) 
  });
})

describe('the minimum temperature is 10', function(){
  it('does not go beyond 10', function(){
    expect(thermostat.downTemperature(11)).toEqual(10)
  });
})

describe('the maximum default tempatrure is 25', function(){
  it('does not go beyond 25', function(){
    expect(thermostat.upTemperature(6)).toEqual(25)
  })
})

describe('power saving mode is on', function() {
  it('returns on', function() {
    expect(thermostat.powerMode).toEqual('on')
  })
})

}); 


