const loadAllLessons = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((data) => displayLessons(data.data));
};

const displayLessons = (lessons) => {
  console.log(lessons);

  const levelContainer = document.getElementById("level-container");
  for (const lesson of lessons) {
    const leveldiv = document.createElement("div");

    leveldiv.innerHTML = `
    <button class="btn btn-outline btn-info">Lesson - ${lesson.level_no}</button>
    `;
    levelContainer.append(leveldiv);
  }
};

loadAllLessons();
