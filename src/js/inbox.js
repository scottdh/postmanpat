(function() {
  var inbox = new Reef("#inbox", {
    data: {
      inbox: [
        {
          sender: "Aaron Root",
          location: "Sydney, Australia",
          posted: new Date(),
          content:
            "<p>Maecenas nec vulputate dolor, vitae suscipit urna. Integer semper odio quam. Suspendisse volutpat felis nisi, quis auctor nunc elementum ut. Donec libero erat, fermentum at ex ac, pulvinar pellentesque libero. Sed ex purus, consequat a neque a, posuere dapibus est. Sed egestas egestas neque quis tincidunt. Nulla efficitur consectetur ante, non iaculis erat varius eget quis rutrum enim sit amet.</p>"
        },
        {
          sender: "Helen Corbett",
          location: "Sydney, Australia",
          posted: new Date(),
          content:
            "<p>Maecenas nec vulputate dolor, vitae suscipit urna. Integer semper odio quam. Suspendisse volutpat felis nisi, quis auctor nunc elementum ut. Donec libero erat, fermentum at ex ac, pulvinar pellentesque libero. Sed ex purus, consequat a neque a, posuere dapibus est. Sed egestas egestas neque quis tincidunt. Nulla efficitur consectetur ante, non iaculis erat varius eget quis rutrum enim sit amet.</p>"
        },
        {
          sender: "Helen Corbett",
          location: "Sydney, Australia",
          posted: new Date(),
          content:
            "<p>Maecenas nec vulputate dolor, vitae suscipit urna. Integer semper odio quam. Suspendisse volutpat felis nisi, quis auctor nunc elementum ut. Donec libero erat, fermentum at ex ac, pulvinar pellentesque libero. Sed ex purus, consequat a neque a, posuere dapibus est. Sed egestas egestas neque quis tincidunt. Nulla efficitur consectetur ante, non iaculis erat varius eget quis rutrum enim sit amet.</p>"
        }
      ]
    },
    template: function(props) {
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
        <div class="tableView__row">
          <div class="tableView__row__left">
            <div class="envelopeIcon"></div>
          </div>
          <div class="tableView__row__center">
            <h5 class="tableView__row__title">Sydney, Australia</h5>
            <p class="tableView__row__subtitle">Unread Letter</p>
          </div>
          <div class="tableView__row__right">
            <i class="fas fa-chevron-right"></i>
          </div>
        </div>
        <div class="tableView__row">
          <div class="tableView__row__left">
            <div class="envelopeIcon"></div>
          </div>
          <div class="tableView__row__center">
            <h5 class="tableView__row__title">Bristol, England</h5>
            <p class="tableView__row__subtitle">Unread letter</p>
          </div>
          <div class="tableView__row__right">
            <i class="fas fa-chevron-right"></i>
          </div>
        </div>
      </section>
      <button class="fab">
        <div class="icon"><i class="fas fa-feather-alt"></i></div>
      </button>
    `;
    }
  });

  inbox.render();
})();
