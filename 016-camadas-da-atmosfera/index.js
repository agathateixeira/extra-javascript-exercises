// Troposfera: essa camada se estende até 20 km do solo;
// Estratosfera: a estratosfera chega a 50 km do solo;
// Mesosfera: o topo da mesosfera fica a 80 km do solo;
// Termosfera: o topo da termosfera fica a  450 km acima da Terra;
// Exosfera: a camada superior da atmosfera fica a  900 km acima da Terra.

// utilizando if/else
function solucao(altitude) {
  if (altitude > 0 && altitude <= 20) {
    console.log("Troposfera");
  } else if (altitude > 20 && altitude <= 50) {
    console.log("Estratosfera");
  } else if (altitude > 50 && altitude <= 80) {
    console.log("Mesosfera");
  } else if (altitude > 80 && altitude <= 450) {
    console.log("Termosfera");
  } else if (altitude > 450 && altitude <= 900) {
    console.log("Exosfera");
  } else {
    console.log("Digite um valor válido.");
  }
}
