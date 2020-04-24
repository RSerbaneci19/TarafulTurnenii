import {Component, OnInit, ViewChild} from '@angular/core';
import {GALLERY_CONF, GALLERY_IMAGE, NgxImageGalleryComponent} from "ngx-image-gallery";

import _ from 'lodash';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements OnInit {

  @ViewChild(NgxImageGalleryComponent) ngxImageGallery: NgxImageGalleryComponent;

  images: GALLERY_IMAGE[] = [
    {
      url: "https://scontent.ftsr1-1.fna.fbcdn.net/v/t1.0-9/81967243_558947181353045_8621538769545199616_n.jpg?_nc_cat=111&_nc_sid=8bfeb9&_nc_oc=AQlL4YsIttgU-WvVSUKiYgh9nRXtHZxPQUp6CGmyfbk0ftuHcywdnPJ_UXY3__gcJwY&_nc_ht=scontent.ftsr1-1.fna&oh=c14751249842cc66c721b63f292c5366&oe=5ECA6A2B",
      thumbnailUrl: "https://scontent.ftsr1-1.fna.fbcdn.net/v/t1.0-9/81967243_558947181353045_8621538769545199616_n.jpg?_nc_cat=111&_nc_sid=8bfeb9&_nc_oc=AQlL4YsIttgU-WvVSUKiYgh9nRXtHZxPQUp6CGmyfbk0ftuHcywdnPJ_UXY3__gcJwY&_nc_ht=scontent.ftsr1-1.fna&oh=c14751249842cc66c721b63f292c5366&oe=5ECA6A2B"
    },
    {
      url: "https://scontent.ftsr1-2.fna.fbcdn.net/v/t1.0-9/80434292_544009796180117_6169155792634118144_o.jpg?_nc_cat=110&_nc_sid=8bfeb9&_nc_oc=AQmJPqAwZ0FnznJfC5ywcAxbux_V28GDCPsTySaka586xJoGq33z6n-PV3zJGMeUuAc&_nc_ht=scontent.ftsr1-2.fna&oh=f97a36784ae7c13d7b2231c48546d945&oe=5EC6D63E",
      thumbnailUrl: "https://scontent.ftsr1-2.fna.fbcdn.net/v/t1.0-9/80434292_544009796180117_6169155792634118144_o.jpg?_nc_cat=110&_nc_sid=8bfeb9&_nc_oc=AQmJPqAwZ0FnznJfC5ywcAxbux_V28GDCPsTySaka586xJoGq33z6n-PV3zJGMeUuAc&_nc_ht=scontent.ftsr1-2.fna&oh=f97a36784ae7c13d7b2231c48546d945&oe=5EC6D63E"
    },
    {
      url: "https://scontent.ftsr1-1.fna.fbcdn.net/v/t1.0-9/79385621_538721366708960_1501537626291699712_o.jpg?_nc_cat=102&_nc_sid=8bfeb9&_nc_oc=AQn5TZA9t3eGt7OFT12QNHFNZWcmki2LYBs1comjTTF_zPseMZ8xgc8kS1UlYfbM_Hc&_nc_ht=scontent.ftsr1-1.fna&oh=5763844053fd4c38b535c2957bbf732a&oe=5EC83212",
      thumbnailUrl: "https://scontent.ftsr1-1.fna.fbcdn.net/v/t1.0-9/79385621_538721366708960_1501537626291699712_o.jpg?_nc_cat=102&_nc_sid=8bfeb9&_nc_oc=AQn5TZA9t3eGt7OFT12QNHFNZWcmki2LYBs1comjTTF_zPseMZ8xgc8kS1UlYfbM_Hc&_nc_ht=scontent.ftsr1-1.fna&oh=5763844053fd4c38b535c2957bbf732a&oe=5EC83212"
    },
    {
      url: "https://scontent.ftsr1-2.fna.fbcdn.net/v/t1.0-9/73234809_511449849436112_3851687745764196352_o.jpg?_nc_cat=107&_nc_sid=8bfeb9&_nc_oc=AQm70NdgOCMwdD0m4wfMgMayOWdv7zJbrsETGS9Nt9TNVYRitwffEg_-x4qC4TG99x0&_nc_ht=scontent.ftsr1-2.fna&oh=c358e8d80f872a1a5c0397f1bf71ae8b&oe=5EC77BAD",
      thumbnailUrl: "https://scontent.ftsr1-2.fna.fbcdn.net/v/t1.0-9/73234809_511449849436112_3851687745764196352_o.jpg?_nc_cat=107&_nc_sid=8bfeb9&_nc_oc=AQm70NdgOCMwdD0m4wfMgMayOWdv7zJbrsETGS9Nt9TNVYRitwffEg_-x4qC4TG99x0&_nc_ht=scontent.ftsr1-2.fna&oh=c358e8d80f872a1a5c0397f1bf71ae8b&oe=5EC77BAD"
    },
    {
      url: "https://scontent.ftsr1-1.fna.fbcdn.net/v/t1.0-9/65230190_434912450423186_9095591717507170304_o.jpg?_nc_cat=106&_nc_sid=8bfeb9&_nc_oc=AQnlmO-qwEEupQHCCdJ17nV7gk1rto8FerKOFqbNrDyOw2kJox1eE9zlFyAbNnUzCq8&_nc_ht=scontent.ftsr1-1.fna&oh=2fd942b3681131813217c6a463ad11ad&oe=5EC6FB52",
      thumbnailUrl: "https://scontent.ftsr1-1.fna.fbcdn.net/v/t1.0-9/65230190_434912450423186_9095591717507170304_o.jpg?_nc_cat=106&_nc_sid=8bfeb9&_nc_oc=AQnlmO-qwEEupQHCCdJ17nV7gk1rto8FerKOFqbNrDyOw2kJox1eE9zlFyAbNnUzCq8&_nc_ht=scontent.ftsr1-1.fna&oh=2fd942b3681131813217c6a463ad11ad&oe=5EC6FB52"
    },
    {
      url: "https://scontent.ftsr1-2.fna.fbcdn.net/v/t1.0-9/62037999_420159078565190_35680337732304896_n.jpg?_nc_cat=110&_nc_sid=8bfeb9&_nc_oc=AQm4NhUf4CsWkGDjMcWJCpT5GfY6BCd3WdBBP7kVqdl866alxYgrjG5mPHAbBa4GbbU&_nc_ht=scontent.ftsr1-2.fna&oh=43cce9fa18e5343e5de078a5287c2bd0&oe=5EC71D4E",
      thumbnailUrl: "https://scontent.ftsr1-2.fna.fbcdn.net/v/t1.0-9/62037999_420159078565190_35680337732304896_n.jpg?_nc_cat=110&_nc_sid=8bfeb9&_nc_oc=AQm4NhUf4CsWkGDjMcWJCpT5GfY6BCd3WdBBP7kVqdl866alxYgrjG5mPHAbBa4GbbU&_nc_ht=scontent.ftsr1-2.fna&oh=43cce9fa18e5343e5de078a5287c2bd0&oe=5EC71D4E"
    },
    {
      url: "https://scontent.ftsr1-2.fna.fbcdn.net/v/t1.0-9/62037999_420159078565190_35680337732304896_n.jpg?_nc_cat=110&_nc_sid=8bfeb9&_nc_oc=AQm4NhUf4CsWkGDjMcWJCpT5GfY6BCd3WdBBP7kVqdl866alxYgrjG5mPHAbBa4GbbU&_nc_ht=scontent.ftsr1-2.fna&oh=43cce9fa18e5343e5de078a5287c2bd0&oe=5EC71D4E",
      thumbnailUrl: "https://scontent.ftsr1-2.fna.fbcdn.net/v/t1.0-9/62037999_420159078565190_35680337732304896_n.jpg?_nc_cat=110&_nc_sid=8bfeb9&_nc_oc=AQm4NhUf4CsWkGDjMcWJCpT5GfY6BCd3WdBBP7kVqdl866alxYgrjG5mPHAbBa4GbbU&_nc_ht=scontent.ftsr1-2.fna&oh=43cce9fa18e5343e5de078a5287c2bd0&oe=5EC71D4E"
    },
    {
      url: "https://scontent.ftsr1-1.fna.fbcdn.net/v/t1.0-9/81967243_558947181353045_8621538769545199616_n.jpg?_nc_cat=111&_nc_sid=8bfeb9&_nc_oc=AQlL4YsIttgU-WvVSUKiYgh9nRXtHZxPQUp6CGmyfbk0ftuHcywdnPJ_UXY3__gcJwY&_nc_ht=scontent.ftsr1-1.fna&oh=c14751249842cc66c721b63f292c5366&oe=5ECA6A2B",
      thumbnailUrl: "https://scontent.ftsr1-1.fna.fbcdn.net/v/t1.0-9/81967243_558947181353045_8621538769545199616_n.jpg?_nc_cat=111&_nc_sid=8bfeb9&_nc_oc=AQlL4YsIttgU-WvVSUKiYgh9nRXtHZxPQUp6CGmyfbk0ftuHcywdnPJ_UXY3__gcJwY&_nc_ht=scontent.ftsr1-1.fna&oh=c14751249842cc66c721b63f292c5366&oe=5ECA6A2B"
    },
    {
      url: "https://scontent.ftsr1-2.fna.fbcdn.net/v/t1.0-9/80434292_544009796180117_6169155792634118144_o.jpg?_nc_cat=110&_nc_sid=8bfeb9&_nc_oc=AQmJPqAwZ0FnznJfC5ywcAxbux_V28GDCPsTySaka586xJoGq33z6n-PV3zJGMeUuAc&_nc_ht=scontent.ftsr1-2.fna&oh=f97a36784ae7c13d7b2231c48546d945&oe=5EC6D63E",
      thumbnailUrl: "https://scontent.ftsr1-2.fna.fbcdn.net/v/t1.0-9/80434292_544009796180117_6169155792634118144_o.jpg?_nc_cat=110&_nc_sid=8bfeb9&_nc_oc=AQmJPqAwZ0FnznJfC5ywcAxbux_V28GDCPsTySaka586xJoGq33z6n-PV3zJGMeUuAc&_nc_ht=scontent.ftsr1-2.fna&oh=f97a36784ae7c13d7b2231c48546d945&oe=5EC6D63E"
    },
    {
      url: "https://scontent.ftsr1-1.fna.fbcdn.net/v/t1.0-9/79385621_538721366708960_1501537626291699712_o.jpg?_nc_cat=102&_nc_sid=8bfeb9&_nc_oc=AQn5TZA9t3eGt7OFT12QNHFNZWcmki2LYBs1comjTTF_zPseMZ8xgc8kS1UlYfbM_Hc&_nc_ht=scontent.ftsr1-1.fna&oh=5763844053fd4c38b535c2957bbf732a&oe=5EC83212",
      thumbnailUrl: "https://scontent.ftsr1-1.fna.fbcdn.net/v/t1.0-9/79385621_538721366708960_1501537626291699712_o.jpg?_nc_cat=102&_nc_sid=8bfeb9&_nc_oc=AQn5TZA9t3eGt7OFT12QNHFNZWcmki2LYBs1comjTTF_zPseMZ8xgc8kS1UlYfbM_Hc&_nc_ht=scontent.ftsr1-1.fna&oh=5763844053fd4c38b535c2957bbf732a&oe=5EC83212"
    },
    {
      url: "https://scontent.ftsr1-2.fna.fbcdn.net/v/t1.0-9/73234809_511449849436112_3851687745764196352_o.jpg?_nc_cat=107&_nc_sid=8bfeb9&_nc_oc=AQm70NdgOCMwdD0m4wfMgMayOWdv7zJbrsETGS9Nt9TNVYRitwffEg_-x4qC4TG99x0&_nc_ht=scontent.ftsr1-2.fna&oh=c358e8d80f872a1a5c0397f1bf71ae8b&oe=5EC77BAD",
      thumbnailUrl: "https://scontent.ftsr1-2.fna.fbcdn.net/v/t1.0-9/73234809_511449849436112_3851687745764196352_o.jpg?_nc_cat=107&_nc_sid=8bfeb9&_nc_oc=AQm70NdgOCMwdD0m4wfMgMayOWdv7zJbrsETGS9Nt9TNVYRitwffEg_-x4qC4TG99x0&_nc_ht=scontent.ftsr1-2.fna&oh=c358e8d80f872a1a5c0397f1bf71ae8b&oe=5EC77BAD"
    },
    {
      url: "https://scontent.ftsr1-1.fna.fbcdn.net/v/t1.0-9/65230190_434912450423186_9095591717507170304_o.jpg?_nc_cat=106&_nc_sid=8bfeb9&_nc_oc=AQnlmO-qwEEupQHCCdJ17nV7gk1rto8FerKOFqbNrDyOw2kJox1eE9zlFyAbNnUzCq8&_nc_ht=scontent.ftsr1-1.fna&oh=2fd942b3681131813217c6a463ad11ad&oe=5EC6FB52",
      thumbnailUrl: "https://scontent.ftsr1-1.fna.fbcdn.net/v/t1.0-9/65230190_434912450423186_9095591717507170304_o.jpg?_nc_cat=106&_nc_sid=8bfeb9&_nc_oc=AQnlmO-qwEEupQHCCdJ17nV7gk1rto8FerKOFqbNrDyOw2kJox1eE9zlFyAbNnUzCq8&_nc_ht=scontent.ftsr1-1.fna&oh=2fd942b3681131813217c6a463ad11ad&oe=5EC6FB52"
    },
    {
      url: "https://scontent.ftsr1-2.fna.fbcdn.net/v/t1.0-9/62037999_420159078565190_35680337732304896_n.jpg?_nc_cat=110&_nc_sid=8bfeb9&_nc_oc=AQm4NhUf4CsWkGDjMcWJCpT5GfY6BCd3WdBBP7kVqdl866alxYgrjG5mPHAbBa4GbbU&_nc_ht=scontent.ftsr1-2.fna&oh=43cce9fa18e5343e5de078a5287c2bd0&oe=5EC71D4E",
      thumbnailUrl: "https://scontent.ftsr1-2.fna.fbcdn.net/v/t1.0-9/62037999_420159078565190_35680337732304896_n.jpg?_nc_cat=110&_nc_sid=8bfeb9&_nc_oc=AQm4NhUf4CsWkGDjMcWJCpT5GfY6BCd3WdBBP7kVqdl866alxYgrjG5mPHAbBa4GbbU&_nc_ht=scontent.ftsr1-2.fna&oh=43cce9fa18e5343e5de078a5287c2bd0&oe=5EC71D4E"
    },
    {
      url: "https://scontent.ftsr1-2.fna.fbcdn.net/v/t1.0-9/62037999_420159078565190_35680337732304896_n.jpg?_nc_cat=110&_nc_sid=8bfeb9&_nc_oc=AQm4NhUf4CsWkGDjMcWJCpT5GfY6BCd3WdBBP7kVqdl866alxYgrjG5mPHAbBa4GbbU&_nc_ht=scontent.ftsr1-2.fna&oh=43cce9fa18e5343e5de078a5287c2bd0&oe=5EC71D4E",
      thumbnailUrl: "https://scontent.ftsr1-2.fna.fbcdn.net/v/t1.0-9/62037999_420159078565190_35680337732304896_n.jpg?_nc_cat=110&_nc_sid=8bfeb9&_nc_oc=AQm4NhUf4CsWkGDjMcWJCpT5GfY6BCd3WdBBP7kVqdl866alxYgrjG5mPHAbBa4GbbU&_nc_ht=scontent.ftsr1-2.fna&oh=43cce9fa18e5343e5de078a5287c2bd0&oe=5EC71D4E"
    },
    {
      url: "https://scontent.ftsr1-1.fna.fbcdn.net/v/t1.0-9/81967243_558947181353045_8621538769545199616_n.jpg?_nc_cat=111&_nc_sid=8bfeb9&_nc_oc=AQlL4YsIttgU-WvVSUKiYgh9nRXtHZxPQUp6CGmyfbk0ftuHcywdnPJ_UXY3__gcJwY&_nc_ht=scontent.ftsr1-1.fna&oh=c14751249842cc66c721b63f292c5366&oe=5ECA6A2B",
      thumbnailUrl: "https://scontent.ftsr1-1.fna.fbcdn.net/v/t1.0-9/81967243_558947181353045_8621538769545199616_n.jpg?_nc_cat=111&_nc_sid=8bfeb9&_nc_oc=AQlL4YsIttgU-WvVSUKiYgh9nRXtHZxPQUp6CGmyfbk0ftuHcywdnPJ_UXY3__gcJwY&_nc_ht=scontent.ftsr1-1.fna&oh=c14751249842cc66c721b63f292c5366&oe=5ECA6A2B"
    },
    {
      url: "https://scontent.ftsr1-2.fna.fbcdn.net/v/t1.0-9/80434292_544009796180117_6169155792634118144_o.jpg?_nc_cat=110&_nc_sid=8bfeb9&_nc_oc=AQmJPqAwZ0FnznJfC5ywcAxbux_V28GDCPsTySaka586xJoGq33z6n-PV3zJGMeUuAc&_nc_ht=scontent.ftsr1-2.fna&oh=f97a36784ae7c13d7b2231c48546d945&oe=5EC6D63E",
      thumbnailUrl: "https://scontent.ftsr1-2.fna.fbcdn.net/v/t1.0-9/80434292_544009796180117_6169155792634118144_o.jpg?_nc_cat=110&_nc_sid=8bfeb9&_nc_oc=AQmJPqAwZ0FnznJfC5ywcAxbux_V28GDCPsTySaka586xJoGq33z6n-PV3zJGMeUuAc&_nc_ht=scontent.ftsr1-2.fna&oh=f97a36784ae7c13d7b2231c48546d945&oe=5EC6D63E"
    },
    {
      url: "https://scontent.ftsr1-1.fna.fbcdn.net/v/t1.0-9/79385621_538721366708960_1501537626291699712_o.jpg?_nc_cat=102&_nc_sid=8bfeb9&_nc_oc=AQn5TZA9t3eGt7OFT12QNHFNZWcmki2LYBs1comjTTF_zPseMZ8xgc8kS1UlYfbM_Hc&_nc_ht=scontent.ftsr1-1.fna&oh=5763844053fd4c38b535c2957bbf732a&oe=5EC83212",
      thumbnailUrl: "https://scontent.ftsr1-1.fna.fbcdn.net/v/t1.0-9/79385621_538721366708960_1501537626291699712_o.jpg?_nc_cat=102&_nc_sid=8bfeb9&_nc_oc=AQn5TZA9t3eGt7OFT12QNHFNZWcmki2LYBs1comjTTF_zPseMZ8xgc8kS1UlYfbM_Hc&_nc_ht=scontent.ftsr1-1.fna&oh=5763844053fd4c38b535c2957bbf732a&oe=5EC83212"
    },
    {
      url: "https://scontent.ftsr1-2.fna.fbcdn.net/v/t1.0-9/73234809_511449849436112_3851687745764196352_o.jpg?_nc_cat=107&_nc_sid=8bfeb9&_nc_oc=AQm70NdgOCMwdD0m4wfMgMayOWdv7zJbrsETGS9Nt9TNVYRitwffEg_-x4qC4TG99x0&_nc_ht=scontent.ftsr1-2.fna&oh=c358e8d80f872a1a5c0397f1bf71ae8b&oe=5EC77BAD",
      thumbnailUrl: "https://scontent.ftsr1-2.fna.fbcdn.net/v/t1.0-9/73234809_511449849436112_3851687745764196352_o.jpg?_nc_cat=107&_nc_sid=8bfeb9&_nc_oc=AQm70NdgOCMwdD0m4wfMgMayOWdv7zJbrsETGS9Nt9TNVYRitwffEg_-x4qC4TG99x0&_nc_ht=scontent.ftsr1-2.fna&oh=c358e8d80f872a1a5c0397f1bf71ae8b&oe=5EC77BAD"
    },
    {
      url: "https://scontent.ftsr1-1.fna.fbcdn.net/v/t1.0-9/65230190_434912450423186_9095591717507170304_o.jpg?_nc_cat=106&_nc_sid=8bfeb9&_nc_oc=AQnlmO-qwEEupQHCCdJ17nV7gk1rto8FerKOFqbNrDyOw2kJox1eE9zlFyAbNnUzCq8&_nc_ht=scontent.ftsr1-1.fna&oh=2fd942b3681131813217c6a463ad11ad&oe=5EC6FB52",
      thumbnailUrl: "https://scontent.ftsr1-1.fna.fbcdn.net/v/t1.0-9/65230190_434912450423186_9095591717507170304_o.jpg?_nc_cat=106&_nc_sid=8bfeb9&_nc_oc=AQnlmO-qwEEupQHCCdJ17nV7gk1rto8FerKOFqbNrDyOw2kJox1eE9zlFyAbNnUzCq8&_nc_ht=scontent.ftsr1-1.fna&oh=2fd942b3681131813217c6a463ad11ad&oe=5EC6FB52"
    },
    {
      url: "https://scontent.ftsr1-2.fna.fbcdn.net/v/t1.0-9/62037999_420159078565190_35680337732304896_n.jpg?_nc_cat=110&_nc_sid=8bfeb9&_nc_oc=AQm4NhUf4CsWkGDjMcWJCpT5GfY6BCd3WdBBP7kVqdl866alxYgrjG5mPHAbBa4GbbU&_nc_ht=scontent.ftsr1-2.fna&oh=43cce9fa18e5343e5de078a5287c2bd0&oe=5EC71D4E",
      thumbnailUrl: "https://scontent.ftsr1-2.fna.fbcdn.net/v/t1.0-9/62037999_420159078565190_35680337732304896_n.jpg?_nc_cat=110&_nc_sid=8bfeb9&_nc_oc=AQm4NhUf4CsWkGDjMcWJCpT5GfY6BCd3WdBBP7kVqdl866alxYgrjG5mPHAbBa4GbbU&_nc_ht=scontent.ftsr1-2.fna&oh=43cce9fa18e5343e5de078a5287c2bd0&oe=5EC71D4E"
    },
    {
      url: "https://scontent.ftsr1-2.fna.fbcdn.net/v/t1.0-9/62037999_420159078565190_35680337732304896_n.jpg?_nc_cat=110&_nc_sid=8bfeb9&_nc_oc=AQm4NhUf4CsWkGDjMcWJCpT5GfY6BCd3WdBBP7kVqdl866alxYgrjG5mPHAbBa4GbbU&_nc_ht=scontent.ftsr1-2.fna&oh=43cce9fa18e5343e5de078a5287c2bd0&oe=5EC71D4E",
      thumbnailUrl: "https://scontent.ftsr1-2.fna.fbcdn.net/v/t1.0-9/62037999_420159078565190_35680337732304896_n.jpg?_nc_cat=110&_nc_sid=8bfeb9&_nc_oc=AQm4NhUf4CsWkGDjMcWJCpT5GfY6BCd3WdBBP7kVqdl866alxYgrjG5mPHAbBa4GbbU&_nc_ht=scontent.ftsr1-2.fna&oh=43cce9fa18e5343e5de078a5287c2bd0&oe=5EC71D4E"
    },
    {
      url: "https://scontent.ftsr1-1.fna.fbcdn.net/v/t1.0-9/81967243_558947181353045_8621538769545199616_n.jpg?_nc_cat=111&_nc_sid=8bfeb9&_nc_oc=AQlL4YsIttgU-WvVSUKiYgh9nRXtHZxPQUp6CGmyfbk0ftuHcywdnPJ_UXY3__gcJwY&_nc_ht=scontent.ftsr1-1.fna&oh=c14751249842cc66c721b63f292c5366&oe=5ECA6A2B",
      thumbnailUrl: "https://scontent.ftsr1-1.fna.fbcdn.net/v/t1.0-9/81967243_558947181353045_8621538769545199616_n.jpg?_nc_cat=111&_nc_sid=8bfeb9&_nc_oc=AQlL4YsIttgU-WvVSUKiYgh9nRXtHZxPQUp6CGmyfbk0ftuHcywdnPJ_UXY3__gcJwY&_nc_ht=scontent.ftsr1-1.fna&oh=c14751249842cc66c721b63f292c5366&oe=5ECA6A2B"
    },
    {
      url: "https://scontent.ftsr1-2.fna.fbcdn.net/v/t1.0-9/80434292_544009796180117_6169155792634118144_o.jpg?_nc_cat=110&_nc_sid=8bfeb9&_nc_oc=AQmJPqAwZ0FnznJfC5ywcAxbux_V28GDCPsTySaka586xJoGq33z6n-PV3zJGMeUuAc&_nc_ht=scontent.ftsr1-2.fna&oh=f97a36784ae7c13d7b2231c48546d945&oe=5EC6D63E",
      thumbnailUrl: "https://scontent.ftsr1-2.fna.fbcdn.net/v/t1.0-9/80434292_544009796180117_6169155792634118144_o.jpg?_nc_cat=110&_nc_sid=8bfeb9&_nc_oc=AQmJPqAwZ0FnznJfC5ywcAxbux_V28GDCPsTySaka586xJoGq33z6n-PV3zJGMeUuAc&_nc_ht=scontent.ftsr1-2.fna&oh=f97a36784ae7c13d7b2231c48546d945&oe=5EC6D63E"
    },
    {
      url: "https://scontent.ftsr1-1.fna.fbcdn.net/v/t1.0-9/79385621_538721366708960_1501537626291699712_o.jpg?_nc_cat=102&_nc_sid=8bfeb9&_nc_oc=AQn5TZA9t3eGt7OFT12QNHFNZWcmki2LYBs1comjTTF_zPseMZ8xgc8kS1UlYfbM_Hc&_nc_ht=scontent.ftsr1-1.fna&oh=5763844053fd4c38b535c2957bbf732a&oe=5EC83212",
      thumbnailUrl: "https://scontent.ftsr1-1.fna.fbcdn.net/v/t1.0-9/79385621_538721366708960_1501537626291699712_o.jpg?_nc_cat=102&_nc_sid=8bfeb9&_nc_oc=AQn5TZA9t3eGt7OFT12QNHFNZWcmki2LYBs1comjTTF_zPseMZ8xgc8kS1UlYfbM_Hc&_nc_ht=scontent.ftsr1-1.fna&oh=5763844053fd4c38b535c2957bbf732a&oe=5EC83212"
    },
    {
      url: "https://scontent.ftsr1-2.fna.fbcdn.net/v/t1.0-9/73234809_511449849436112_3851687745764196352_o.jpg?_nc_cat=107&_nc_sid=8bfeb9&_nc_oc=AQm70NdgOCMwdD0m4wfMgMayOWdv7zJbrsETGS9Nt9TNVYRitwffEg_-x4qC4TG99x0&_nc_ht=scontent.ftsr1-2.fna&oh=c358e8d80f872a1a5c0397f1bf71ae8b&oe=5EC77BAD",
      thumbnailUrl: "https://scontent.ftsr1-2.fna.fbcdn.net/v/t1.0-9/73234809_511449849436112_3851687745764196352_o.jpg?_nc_cat=107&_nc_sid=8bfeb9&_nc_oc=AQm70NdgOCMwdD0m4wfMgMayOWdv7zJbrsETGS9Nt9TNVYRitwffEg_-x4qC4TG99x0&_nc_ht=scontent.ftsr1-2.fna&oh=c358e8d80f872a1a5c0397f1bf71ae8b&oe=5EC77BAD"
    },
    {
      url: "https://scontent.ftsr1-1.fna.fbcdn.net/v/t1.0-9/65230190_434912450423186_9095591717507170304_o.jpg?_nc_cat=106&_nc_sid=8bfeb9&_nc_oc=AQnlmO-qwEEupQHCCdJ17nV7gk1rto8FerKOFqbNrDyOw2kJox1eE9zlFyAbNnUzCq8&_nc_ht=scontent.ftsr1-1.fna&oh=2fd942b3681131813217c6a463ad11ad&oe=5EC6FB52",
      thumbnailUrl: "https://scontent.ftsr1-1.fna.fbcdn.net/v/t1.0-9/65230190_434912450423186_9095591717507170304_o.jpg?_nc_cat=106&_nc_sid=8bfeb9&_nc_oc=AQnlmO-qwEEupQHCCdJ17nV7gk1rto8FerKOFqbNrDyOw2kJox1eE9zlFyAbNnUzCq8&_nc_ht=scontent.ftsr1-1.fna&oh=2fd942b3681131813217c6a463ad11ad&oe=5EC6FB52"
    },
    {
      url: "https://scontent.ftsr1-2.fna.fbcdn.net/v/t1.0-9/62037999_420159078565190_35680337732304896_n.jpg?_nc_cat=110&_nc_sid=8bfeb9&_nc_oc=AQm4NhUf4CsWkGDjMcWJCpT5GfY6BCd3WdBBP7kVqdl866alxYgrjG5mPHAbBa4GbbU&_nc_ht=scontent.ftsr1-2.fna&oh=43cce9fa18e5343e5de078a5287c2bd0&oe=5EC71D4E",
      thumbnailUrl: "https://scontent.ftsr1-2.fna.fbcdn.net/v/t1.0-9/62037999_420159078565190_35680337732304896_n.jpg?_nc_cat=110&_nc_sid=8bfeb9&_nc_oc=AQm4NhUf4CsWkGDjMcWJCpT5GfY6BCd3WdBBP7kVqdl866alxYgrjG5mPHAbBa4GbbU&_nc_ht=scontent.ftsr1-2.fna&oh=43cce9fa18e5343e5de078a5287c2bd0&oe=5EC71D4E"
    },
    {
      url: "https://scontent.ftsr1-2.fna.fbcdn.net/v/t1.0-9/62037999_420159078565190_35680337732304896_n.jpg?_nc_cat=110&_nc_sid=8bfeb9&_nc_oc=AQm4NhUf4CsWkGDjMcWJCpT5GfY6BCd3WdBBP7kVqdl866alxYgrjG5mPHAbBa4GbbU&_nc_ht=scontent.ftsr1-2.fna&oh=43cce9fa18e5343e5de078a5287c2bd0&oe=5EC71D4E",
      thumbnailUrl: "https://scontent.ftsr1-2.fna.fbcdn.net/v/t1.0-9/62037999_420159078565190_35680337732304896_n.jpg?_nc_cat=110&_nc_sid=8bfeb9&_nc_oc=AQm4NhUf4CsWkGDjMcWJCpT5GfY6BCd3WdBBP7kVqdl866alxYgrjG5mPHAbBa4GbbU&_nc_ht=scontent.ftsr1-2.fna&oh=43cce9fa18e5343e5de078a5287c2bd0&oe=5EC71D4E"
    },
    {
      url: "https://scontent.ftsr1-1.fna.fbcdn.net/v/t1.0-9/81967243_558947181353045_8621538769545199616_n.jpg?_nc_cat=111&_nc_sid=8bfeb9&_nc_oc=AQlL4YsIttgU-WvVSUKiYgh9nRXtHZxPQUp6CGmyfbk0ftuHcywdnPJ_UXY3__gcJwY&_nc_ht=scontent.ftsr1-1.fna&oh=c14751249842cc66c721b63f292c5366&oe=5ECA6A2B",
      thumbnailUrl: "https://scontent.ftsr1-1.fna.fbcdn.net/v/t1.0-9/81967243_558947181353045_8621538769545199616_n.jpg?_nc_cat=111&_nc_sid=8bfeb9&_nc_oc=AQlL4YsIttgU-WvVSUKiYgh9nRXtHZxPQUp6CGmyfbk0ftuHcywdnPJ_UXY3__gcJwY&_nc_ht=scontent.ftsr1-1.fna&oh=c14751249842cc66c721b63f292c5366&oe=5ECA6A2B"
    },
    {
      url: "https://scontent.ftsr1-2.fna.fbcdn.net/v/t1.0-9/80434292_544009796180117_6169155792634118144_o.jpg?_nc_cat=110&_nc_sid=8bfeb9&_nc_oc=AQmJPqAwZ0FnznJfC5ywcAxbux_V28GDCPsTySaka586xJoGq33z6n-PV3zJGMeUuAc&_nc_ht=scontent.ftsr1-2.fna&oh=f97a36784ae7c13d7b2231c48546d945&oe=5EC6D63E",
      thumbnailUrl: "https://scontent.ftsr1-2.fna.fbcdn.net/v/t1.0-9/80434292_544009796180117_6169155792634118144_o.jpg?_nc_cat=110&_nc_sid=8bfeb9&_nc_oc=AQmJPqAwZ0FnznJfC5ywcAxbux_V28GDCPsTySaka586xJoGq33z6n-PV3zJGMeUuAc&_nc_ht=scontent.ftsr1-2.fna&oh=f97a36784ae7c13d7b2231c48546d945&oe=5EC6D63E"
    },
    {
      url: "https://scontent.ftsr1-1.fna.fbcdn.net/v/t1.0-9/79385621_538721366708960_1501537626291699712_o.jpg?_nc_cat=102&_nc_sid=8bfeb9&_nc_oc=AQn5TZA9t3eGt7OFT12QNHFNZWcmki2LYBs1comjTTF_zPseMZ8xgc8kS1UlYfbM_Hc&_nc_ht=scontent.ftsr1-1.fna&oh=5763844053fd4c38b535c2957bbf732a&oe=5EC83212",
      thumbnailUrl: "https://scontent.ftsr1-1.fna.fbcdn.net/v/t1.0-9/79385621_538721366708960_1501537626291699712_o.jpg?_nc_cat=102&_nc_sid=8bfeb9&_nc_oc=AQn5TZA9t3eGt7OFT12QNHFNZWcmki2LYBs1comjTTF_zPseMZ8xgc8kS1UlYfbM_Hc&_nc_ht=scontent.ftsr1-1.fna&oh=5763844053fd4c38b535c2957bbf732a&oe=5EC83212"
    },
    {
      url: "https://scontent.ftsr1-2.fna.fbcdn.net/v/t1.0-9/73234809_511449849436112_3851687745764196352_o.jpg?_nc_cat=107&_nc_sid=8bfeb9&_nc_oc=AQm70NdgOCMwdD0m4wfMgMayOWdv7zJbrsETGS9Nt9TNVYRitwffEg_-x4qC4TG99x0&_nc_ht=scontent.ftsr1-2.fna&oh=c358e8d80f872a1a5c0397f1bf71ae8b&oe=5EC77BAD",
      thumbnailUrl: "https://scontent.ftsr1-2.fna.fbcdn.net/v/t1.0-9/73234809_511449849436112_3851687745764196352_o.jpg?_nc_cat=107&_nc_sid=8bfeb9&_nc_oc=AQm70NdgOCMwdD0m4wfMgMayOWdv7zJbrsETGS9Nt9TNVYRitwffEg_-x4qC4TG99x0&_nc_ht=scontent.ftsr1-2.fna&oh=c358e8d80f872a1a5c0397f1bf71ae8b&oe=5EC77BAD"
    },
    {
      url: "https://scontent.ftsr1-1.fna.fbcdn.net/v/t1.0-9/65230190_434912450423186_9095591717507170304_o.jpg?_nc_cat=106&_nc_sid=8bfeb9&_nc_oc=AQnlmO-qwEEupQHCCdJ17nV7gk1rto8FerKOFqbNrDyOw2kJox1eE9zlFyAbNnUzCq8&_nc_ht=scontent.ftsr1-1.fna&oh=2fd942b3681131813217c6a463ad11ad&oe=5EC6FB52",
      thumbnailUrl: "https://scontent.ftsr1-1.fna.fbcdn.net/v/t1.0-9/65230190_434912450423186_9095591717507170304_o.jpg?_nc_cat=106&_nc_sid=8bfeb9&_nc_oc=AQnlmO-qwEEupQHCCdJ17nV7gk1rto8FerKOFqbNrDyOw2kJox1eE9zlFyAbNnUzCq8&_nc_ht=scontent.ftsr1-1.fna&oh=2fd942b3681131813217c6a463ad11ad&oe=5EC6FB52"
    },
    {
      url: "https://scontent.ftsr1-2.fna.fbcdn.net/v/t1.0-9/62037999_420159078565190_35680337732304896_n.jpg?_nc_cat=110&_nc_sid=8bfeb9&_nc_oc=AQm4NhUf4CsWkGDjMcWJCpT5GfY6BCd3WdBBP7kVqdl866alxYgrjG5mPHAbBa4GbbU&_nc_ht=scontent.ftsr1-2.fna&oh=43cce9fa18e5343e5de078a5287c2bd0&oe=5EC71D4E",
      thumbnailUrl: "https://scontent.ftsr1-2.fna.fbcdn.net/v/t1.0-9/62037999_420159078565190_35680337732304896_n.jpg?_nc_cat=110&_nc_sid=8bfeb9&_nc_oc=AQm4NhUf4CsWkGDjMcWJCpT5GfY6BCd3WdBBP7kVqdl866alxYgrjG5mPHAbBa4GbbU&_nc_ht=scontent.ftsr1-2.fna&oh=43cce9fa18e5343e5de078a5287c2bd0&oe=5EC71D4E"
    },
    {
      url: "https://scontent.ftsr1-2.fna.fbcdn.net/v/t1.0-9/62037999_420159078565190_35680337732304896_n.jpg?_nc_cat=110&_nc_sid=8bfeb9&_nc_oc=AQm4NhUf4CsWkGDjMcWJCpT5GfY6BCd3WdBBP7kVqdl866alxYgrjG5mPHAbBa4GbbU&_nc_ht=scontent.ftsr1-2.fna&oh=43cce9fa18e5343e5de078a5287c2bd0&oe=5EC71D4E",
      thumbnailUrl: "https://scontent.ftsr1-2.fna.fbcdn.net/v/t1.0-9/62037999_420159078565190_35680337732304896_n.jpg?_nc_cat=110&_nc_sid=8bfeb9&_nc_oc=AQm4NhUf4CsWkGDjMcWJCpT5GfY6BCd3WdBBP7kVqdl866alxYgrjG5mPHAbBa4GbbU&_nc_ht=scontent.ftsr1-2.fna&oh=43cce9fa18e5343e5de078a5287c2bd0&oe=5EC71D4E"
    },
  ];

  conf: GALLERY_CONF = {
    imageBorderRadius: '3px',
    imageOffset: '20px',
    showDeleteControl: false,
    showCloseControl: true,
    showExtUrlControl: true,
    showImageTitle: false,
    showThumbnails: true,
    closeOnEsc: true,
    reactToKeyboard: true,
    reactToMouseWheel: true,
    reactToRightClick: false,
    thumbnailSize: 30,
    backdropColor: 'rgba(20,20,21,0.85)',
    inline: false,
    showArrows: true,
    imagePointer: true
  };

  range = _.range;

  constructor() {
  }

  ngOnInit() {
  }

  openGallery(index) {
    this.ngxImageGallery.open(index);
  }

  galleryOpened(index) {
    console.info('Gallery opened at index ', index);
  }

  galleryClosed() {
    console.info('Gallery closed.');
  }

  galleryImageChanged(index) {
    console.info('Gallery image changed to index ', index);
  }

  galleryImageClicked(index) {
    console.info('Gallery image clicked with index ', index);
  }

  deleteImage(index) {
    console.info('Delete image at index ', index);
  }

}
