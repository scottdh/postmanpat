(function () {
  var inbox = new Reef("#inbox", {
    data: {
      inbox: [
        {
          sender: "Aaron Root",
          location: "Sydney, Australia",
          posted: new Date(),
          opened: true,
          subject: "Hey how're things?",
          content:
            "<p>Maecenas nec vulputate dolor, vitae suscipit urna. Integer semper odio quam. Suspendisse volutpat felis nisi, quis auctor nunc elementum ut. Donec libero erat, fermentum at ex ac, pulvinar pellentesque libero. Sed ex purus, consequat a neque a, posuere dapibus est. Sed egestas egestas neque quis tincidunt. Nulla efficitur consectetur ante, non iaculis erat varius eget quis rutrum enim sit amet.</p>",
        },
        {
          sender: "Angela Merkel",
          location: "Berlin, Deutschland",
          posted: new Date(),
          opened: false,
          content:
            "<p>Maecenas nec vulputate dolor, vitae suscipit urna. Integer semper odio quam. Suspendisse volutpat felis nisi, quis auctor nunc elementum ut. Donec libero erat, fermentum at ex ac, pulvinar pellentesque libero. Sed ex purus, consequat a neque a, posuere dapibus est. Sed egestas egestas neque quis tincidunt. Nulla efficitur consectetur ante, non iaculis erat varius eget quis rutrum enim sit amet.</p>",
        },
        {
          sender: "Ivana Onatop",
          location: "St. Petersburg, Russia",
          posted: new Date(),
          opened: false,
          content:
            "<p>Maecenas nec vulputate dolor, vitae suscipit urna. Integer semper odio quam. Suspendisse volutpat felis nisi, quis auctor nunc elementum ut. Donec libero erat, fermentum at ex ac, pulvinar pellentesque libero. Sed ex purus, consequat a neque a, posuere dapibus est. Sed egestas egestas neque quis tincidunt. Nulla efficitur consectetur ante, non iaculis erat varius eget quis rutrum enim sit amet.</p>",
        },
      ],
    },
    template: function (props) {
      return `
    <section class="postDetails">
        <div class="postDetails__letterCount">
          ${props.inbox.length}
        </div>
        <h2>New Letters Today</h2>
        <p>Letters are delivered each day at 8am. Check back tomorrow</p>
      </section>
      <section class="tableView">
        <h4 class="tableView__groupedSectionHeader">Today</h4>
        ${props.inbox
          .map(function (letter) {
            let html = `<div class="tableView__row">
          <div class="tableView__row__left">
            <div class="envelopeIcon">
            <div class="envelope"></div>
            ${letter.opened ? `<div class='letter'></div>` : ``}
            </div>
          </div>
          <div class="tableView__row__center">
            <h5 class="tableView__row__title">${letter.location}</h5>
            <p class="tableView__row__subtitle ${
              letter.opened ? `--opened` : ``
            }">${letter.opened ? letter.subject : `Unread Letter`}</p>
          </div>
          <div class="tableView__row__right">
            <i class="fas fa-chevron-right"></i>
          </div>
        </div>`;
            return html;
          })
          .join("")}
    
      </section>
      <button class="fab">
        <div class="icon"><i class="fas fa-feather-alt"></i></div>
      </button>
    `;
    },
  });

  inbox.render();
})();
