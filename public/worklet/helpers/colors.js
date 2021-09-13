function* colorGenerator1() {
  while (true) {
    yield "#D2E155";
    yield "#4BD6B4";
    yield "#A1E0D0";
  }
}
function* colorGenerator2() {
  while (true) {
    yield "#E8F0AA";
    yield "#C6EFE5";
    yield "#C6EFE5";
    yield "#E8F0AA";
    yield "#E8F0AA";
    yield "#E8F0AA";
    yield "#C6EFE5";
    yield "#E8F0AA";
    yield "#E8F0AA";
    yield "#C6EFE5";
    yield "#C6EFE5";
    yield "#C6EFE5";
  }
}
function* colorGenerator3() {
  while (true) {
    yield "#F2C94C";
    yield "#4BD6B4";
    yield "#A1E0D0";
    yield "#D2E155";
    yield "#EB5757";
  }
}
function* colorGenerator4() {
  while (true) {
    yield "#F3E6C2";
    yield "#C6EFE5";
    yield "#E8F0AA";
    yield "#E8F0AA";
    yield "#F1D4D5";
  }
}

export { colorGenerator1, colorGenerator2, colorGenerator3, colorGenerator4 };
