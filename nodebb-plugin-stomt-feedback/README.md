# NodeBB Stomt Feedback Plugin
  STOMT makes it easy for anyone to provide instant feedback. This plugin allows you to customize the STOMT feedback button and add it to your nodebb site.Installation is simple and only takes seconds.


## Installation

npm i nodebb-plugin-stomt-feedback

after installing, activate the plugin and restart the nodebb 


### Configuration

The parameters can be configured in the admin-panel to initialize the widget.

| Property | Type | Description |
| :--- | :--- | :--- |
| `appId` _(required)_ | String | The `appId` is your pages application id. You can find it in your application overview in STOMT (https://www.stomt.com/YOUR_PAGE/apps). The target connected to this application id will be used as target. |
| `position` | String | You can set the `position` of the button, the default position is `right`. If required you can align the button to the left side by passing `position: 'left'`. |
| `label` | String | The default label of the button is `Feedback`, you can change that by passing another `label`. |
| `colorText` | String | To change the colors used for the widget button you have three options to configure. The first one is `colorText`, it allows you to change the text color (default: `#FFFFFF`). |
| `colorBackground` | String | The `colorBackground` option allows you to change the background color of the button (default: `#0091C9`). |
| `colorHover` | String | The `colorHover` option allows you to change the background color of the button when the user hovers it (default: `#04729E`). |
| `preload` | Boolean | By setting the property `preload` to `true`, you can tell the Widget to preload the Tab iframe in the background (default: `false`). This reduces the loading delay when showing the Tab for the first time. |

## Example UI

### Admin-panel / User interface:
![Example screenshot](https://i.imgur.com/nqAQD6z.png)
![Example screenshot](https://i.imgur.com/PjlKtfNg.png)

### Create feed:
![Example screenshot](https://i.imgur.com/Zzloxcz.png)


```html
<div id="stomt_create"></div>
```
1- go to widgets

2-drag and drop html box into the desired place

3-add the html code and save

### integrate feed:
![Example screenshot](https://i.imgur.com/jynhpiE.png)


```html
<div id="stomt_feed"></div>
```



1- go to widgets

2-drag and drop html box into the desired place

3-add the html code and save

## Frequently Asked Questions

### What is STOMT all about?

STOMT lets you instantly give feedback in a predefined format. Head off to https://www.stomt.com to find out more!


## Authors

[Mariem Bader](https://github.com/mariembader123) | [Follow Mariem Bader on STOMT](https://www.stomt.com/mariem-bader)

[Max Klenk](https://github.com/maxklenk) | [Follow Max Klenk on STOMT](https://www.stomt.com/max-klenk)

See also the list of [contributors](https://github.com/stomt/stomt-nodebb-extension/contributors) who participated in this project.


## More about STOMT

*Integrate and use STOMT on all your touchpoints.*

* On the web [www.stomt.com](https://www.stomt.com)
* [STOMT for iOS](http://stomt.co/ios)
* [STOMT for Android](http://stomt.co/android)
* [STOMT for Unity](http://stomt.co/unity)
* [STOMT for Unreal](http://stomt.co/unreal)
* [STOMT for Websites](http://stomt.co/web)
* [STOMT for Wordpress](http://stomt.co/wordpress)
* [STOMT for Drupal](http://stomt.co/drupal)
* [STOMT for Joomla](http://stomt.co/joomla)

