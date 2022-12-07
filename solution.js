function quadraticEquation(a, b, c) {
  let delta = 0;
  let x1, x2, x;

  a = Number(a);
  b = Number(b);
  c = Number(c);

  if (a == 0) {
    console.log("Erreur, la valeur de a ne doit pas être nul");
  } else if (a != 0) {
    delta = Math.pow(b, 2) - 4 * a * c;
    console.log("Delta : ", delta);
    if (delta < 0) {
      console.log("Pas de solution réelle");
    } else if (delta == 0) {
      x = -b / (2 * a);
      console.log("x = ", x);
    } else {
      x1 = (-b + Math.sqrt(delta)) / (2 * a);
      x2 = (-b - Math.sqrt(delta)) / (2 * a);

      console.log("Deux solutions réelles trouvées : ");
      console.log("x1 : ", x1);
      console.log("x2 : ", x2);
    }
  }
}

quadraticEquation(6, 22, 7);
