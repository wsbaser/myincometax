"use strict";



define('myincometax/app', ['exports', 'myincometax/resolver', 'ember-load-initializers', 'myincometax/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('myincometax/components/bs-accordion', ['exports', 'ember-bootstrap/components/bs-accordion'], function (exports, _bsAccordion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsAccordion.default;
    }
  });
});
define('myincometax/components/bs-accordion/item', ['exports', 'ember-bootstrap/components/bs-accordion/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('myincometax/components/bs-accordion/item/body', ['exports', 'ember-bootstrap/components/bs-accordion/item/body'], function (exports, _body) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
define('myincometax/components/bs-accordion/item/title', ['exports', 'ember-bootstrap/components/bs-accordion/item/title'], function (exports, _title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
define('myincometax/components/bs-alert', ['exports', 'ember-bootstrap/components/bs-alert'], function (exports, _bsAlert) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsAlert.default;
    }
  });
});
define('myincometax/components/bs-button-group', ['exports', 'ember-bootstrap/components/bs-button-group'], function (exports, _bsButtonGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsButtonGroup.default;
    }
  });
});
define('myincometax/components/bs-button-group/button', ['exports', 'ember-bootstrap/components/bs-button-group/button'], function (exports, _button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
define('myincometax/components/bs-button', ['exports', 'ember-bootstrap/components/bs-button'], function (exports, _bsButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsButton.default;
    }
  });
});
define('myincometax/components/bs-carousel', ['exports', 'ember-bootstrap/components/bs-carousel'], function (exports, _bsCarousel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsCarousel.default;
    }
  });
});
define('myincometax/components/bs-carousel/slide', ['exports', 'ember-bootstrap/components/bs-carousel/slide'], function (exports, _slide) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _slide.default;
    }
  });
});
define('myincometax/components/bs-collapse', ['exports', 'ember-bootstrap/components/bs-collapse'], function (exports, _bsCollapse) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsCollapse.default;
    }
  });
});
define('myincometax/components/bs-dropdown', ['exports', 'ember-bootstrap/components/bs-dropdown'], function (exports, _bsDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsDropdown.default;
    }
  });
});
define('myincometax/components/bs-dropdown/button', ['exports', 'ember-bootstrap/components/bs-dropdown/button'], function (exports, _button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
define('myincometax/components/bs-dropdown/menu', ['exports', 'ember-bootstrap/components/bs-dropdown/menu'], function (exports, _menu) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _menu.default;
    }
  });
});
define('myincometax/components/bs-dropdown/menu/divider', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/divider'], function (exports, _divider) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _divider.default;
    }
  });
});
define('myincometax/components/bs-dropdown/menu/item', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('myincometax/components/bs-dropdown/menu/link-to', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('myincometax/components/bs-dropdown/toggle', ['exports', 'ember-bootstrap/components/bs-dropdown/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
define('myincometax/components/bs-form', ['exports', 'ember-bootstrap/components/bs-form'], function (exports, _bsForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsForm.default;
    }
  });
});
define('myincometax/components/bs-form/element', ['exports', 'ember-bootstrap/components/bs-form/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('myincometax/components/bs-form/element/control', ['exports', 'ember-bootstrap/components/bs-form/element/control'], function (exports, _control) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _control.default;
    }
  });
});
define('myincometax/components/bs-form/element/control/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/control/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('myincometax/components/bs-form/element/control/input', ['exports', 'ember-bootstrap/components/bs-form/element/control/input'], function (exports, _input) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _input.default;
    }
  });
});
define('myincometax/components/bs-form/element/control/textarea', ['exports', 'ember-bootstrap/components/bs-form/element/control/textarea'], function (exports, _textarea) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _textarea.default;
    }
  });
});
define('myincometax/components/bs-form/element/errors', ['exports', 'ember-bootstrap/components/bs-form/element/errors'], function (exports, _errors) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _errors.default;
    }
  });
});
define('myincometax/components/bs-form/element/feedback-icon', ['exports', 'ember-bootstrap/components/bs-form/element/feedback-icon'], function (exports, _feedbackIcon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _feedbackIcon.default;
    }
  });
});
define('myincometax/components/bs-form/element/help-text', ['exports', 'ember-bootstrap/components/bs-form/element/help-text'], function (exports, _helpText) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _helpText.default;
    }
  });
});
define('myincometax/components/bs-form/element/label', ['exports', 'ember-bootstrap/components/bs-form/element/label'], function (exports, _label) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _label.default;
    }
  });
});
define('myincometax/components/bs-form/element/layout/horizontal', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal'], function (exports, _horizontal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _horizontal.default;
    }
  });
});
define('myincometax/components/bs-form/element/layout/horizontal/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('myincometax/components/bs-form/element/layout/inline', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline'], function (exports, _inline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _inline.default;
    }
  });
});
define('myincometax/components/bs-form/element/layout/inline/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('myincometax/components/bs-form/element/layout/vertical', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical'], function (exports, _vertical) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _vertical.default;
    }
  });
});
define('myincometax/components/bs-form/element/layout/vertical/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('myincometax/components/bs-form/group', ['exports', 'ember-bootstrap/components/bs-form/group'], function (exports, _group) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _group.default;
    }
  });
});
define('myincometax/components/bs-modal-simple', ['exports', 'ember-bootstrap/components/bs-modal-simple'], function (exports, _bsModalSimple) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModalSimple.default;
    }
  });
});
define('myincometax/components/bs-modal', ['exports', 'ember-bootstrap/components/bs-modal'], function (exports, _bsModal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModal.default;
    }
  });
});
define('myincometax/components/bs-modal/body', ['exports', 'ember-bootstrap/components/bs-modal/body'], function (exports, _body) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
define('myincometax/components/bs-modal/dialog', ['exports', 'ember-bootstrap/components/bs-modal/dialog'], function (exports, _dialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dialog.default;
    }
  });
});
define('myincometax/components/bs-modal/footer', ['exports', 'ember-bootstrap/components/bs-modal/footer'], function (exports, _footer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _footer.default;
    }
  });
});
define('myincometax/components/bs-modal/header', ['exports', 'ember-bootstrap/components/bs-modal/header'], function (exports, _header) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _header.default;
    }
  });
});
define('myincometax/components/bs-modal/header/close', ['exports', 'ember-bootstrap/components/bs-modal/header/close'], function (exports, _close) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _close.default;
    }
  });
});
define('myincometax/components/bs-modal/header/title', ['exports', 'ember-bootstrap/components/bs-modal/header/title'], function (exports, _title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
define('myincometax/components/bs-nav', ['exports', 'ember-bootstrap/components/bs-nav'], function (exports, _bsNav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsNav.default;
    }
  });
});
define('myincometax/components/bs-nav/item', ['exports', 'ember-bootstrap/components/bs-nav/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('myincometax/components/bs-nav/link-to', ['exports', 'ember-bootstrap/components/bs-nav/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('myincometax/components/bs-navbar', ['exports', 'ember-bootstrap/components/bs-navbar'], function (exports, _bsNavbar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsNavbar.default;
    }
  });
});
define('myincometax/components/bs-navbar/content', ['exports', 'ember-bootstrap/components/bs-navbar/content'], function (exports, _content) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _content.default;
    }
  });
});
define('myincometax/components/bs-navbar/link-to', ['exports', 'ember-bootstrap/components/bs-navbar/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('myincometax/components/bs-navbar/nav', ['exports', 'ember-bootstrap/components/bs-navbar/nav'], function (exports, _nav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _nav.default;
    }
  });
});
define('myincometax/components/bs-navbar/toggle', ['exports', 'ember-bootstrap/components/bs-navbar/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
define('myincometax/components/bs-popover', ['exports', 'ember-bootstrap/components/bs-popover'], function (exports, _bsPopover) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsPopover.default;
    }
  });
});
define('myincometax/components/bs-popover/element', ['exports', 'ember-bootstrap/components/bs-popover/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('myincometax/components/bs-progress', ['exports', 'ember-bootstrap/components/bs-progress'], function (exports, _bsProgress) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsProgress.default;
    }
  });
});
define('myincometax/components/bs-progress/bar', ['exports', 'ember-bootstrap/components/bs-progress/bar'], function (exports, _bar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bar.default;
    }
  });
});
define('myincometax/components/bs-tab', ['exports', 'ember-bootstrap/components/bs-tab'], function (exports, _bsTab) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsTab.default;
    }
  });
});
define('myincometax/components/bs-tab/pane', ['exports', 'ember-bootstrap/components/bs-tab/pane'], function (exports, _pane) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pane.default;
    }
  });
});
define('myincometax/components/bs-tooltip', ['exports', 'ember-bootstrap/components/bs-tooltip'], function (exports, _bsTooltip) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsTooltip.default;
    }
  });
});
define('myincometax/components/bs-tooltip/element', ['exports', 'ember-bootstrap/components/bs-tooltip/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('myincometax/components/ember-popper', ['exports', 'ember-popper/components/ember-popper'], function (exports, _emberPopper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
define('myincometax/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define("myincometax/controllers/application", ["exports"], function (exports) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Controller.extend({
		salaryNet: "",
		salaryGross: "",
		collapsed: true,
		onSalaryChange: Ember.observer('salaryNet', function () {
			var salaryNet = this.get('salaryNet');
		}),
		init: function init() {
			this._super.apply(this, arguments);
			Ember.run.scheduleOnce('afterRender', this, function () {
				$('input.net').focus();
			});
		},
		calculateTaxes: function calculateTaxes(salaryGross) {
			salaryGross = parseInt(salaryGross);
			var pensionTaxMonth = salaryGross * 0.22;
			var medicalTaxMonth = salaryGross * 0.051;
			var socialTaxMonth = salaryGross * 0.029;
			var ndflTaxMonth = salaryGross * 0.13;
			var totalTaxesMonth = pensionTaxMonth + medicalTaxMonth + socialTaxMonth + ndflTaxMonth;

			this.set('pensionTaxMonth', this.formatTaxString(pensionTaxMonth));
			this.set('medicalTaxMonth', this.formatTaxString(medicalTaxMonth));
			this.set('socialTaxMonth', this.formatTaxString(socialTaxMonth));
			this.set('ndflTaxMonth', this.formatTaxString(ndflTaxMonth));
			this.set('totalTaxesMonth', this.formatTaxString(totalTaxesMonth));

			this.set('pensionTaxYear', this.formatTaxString(pensionTaxMonth * 12));
			this.set('medicalTaxYear', this.formatTaxString(medicalTaxMonth * 12));
			this.set('socialTaxYear', this.formatTaxString(socialTaxMonth * 12));
			this.set('ndflTaxYear', this.formatTaxString(ndflTaxMonth * 12));
			this.set('totalTaxesYear', this.formatTaxString(totalTaxesMonth * 12));

			var FOT = salaryGross + pensionTaxMonth + medicalTaxMonth + socialTaxMonth;
			this.set('FOT', this.formatTaxString(FOT));
		},
		clearOutput: function clearOutput() {
			this.set('pensionTaxMonth', '');
			this.set('medicalTaxMonth', '');
			this.set('socialTaxMonth', '');
			this.set('ndflTaxMonth', '');
			this.set('totalTaxesMonth', '');

			this.set('pensionTaxYear', '');
			this.set('medicalTaxYear', '');
			this.set('socialTaxYear', '');
			this.set('ndflTaxYear', '');
			this.set('totalTaxesYear', '');

			this.set('FOT', '');
		},
		formatTaxString: function formatTaxString(value) {
			return Math.floor(value) + ' руб.';
		},

		actions: {
			netSalaryChanged: function netSalaryChanged() {
				var salaryNet = this.get('salaryNet');
				if (salaryNet > 1000) {
					var salaryGross = salaryNet / 0.87;
					this.set('salaryGross', Math.floor(salaryGross));
					this.calculateTaxes(salaryGross);
					this.set('hasOutput', true);
				} else {
					this.set('salaryGross', '');
					this.clearOutput();
					this.set('hasOutput', false);
				}
			},
			grossSalaryChanged: function grossSalaryChanged() {
				var salaryGross = this.get('salaryGross');
				if (salaryGross > 1000) {
					var salaryNet = salaryGross * 0.87;
					this.set('salaryNet', Math.floor(salaryNet));
					this.calculateTaxes(salaryGross);
					this.set('hasOutput', true);
				} else {
					this.set('salaryNet', '');
					this.clearOutput();
					this.set('hasOutput', false);
				}
			},
			filterInput: function filterInput(value, e) {
				if (e.key.length == 1 && (!$.isNumeric(e.key) || value.length == 6)) {
					e.preventDefault();
				}
			},
			showInfoBlock: function showInfoBlock(infoBlockId) {
				var $infoblock = $("#" + infoBlockId);
				$('html, body').animate({
					scrollTop: $infoblock.offset().top
				}, 500, 'linear');
				$infoblock.addClass('highlight');
				setTimeout(function () {
					$infoblock.removeClass('highlight');
				}, 1500);
			},
			toggle: function toggle() {
				this.set('collapsed', false);
				this.set('notCollapsed', true);
				var $infoblock = $(".more-info-block");
				$('html, body').animate({
					scrollTop: $infoblock.offset().top
				}, 500, 'linear');
			}
		}
	});
});
define('myincometax/helpers/app-version', ['exports', 'myincometax/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  var version = _environment.default.APP.version;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('myincometax/helpers/bs-contains', ['exports', 'ember-bootstrap/helpers/bs-contains'], function (exports, _bsContains) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsContains.default;
    }
  });
  Object.defineProperty(exports, 'bsContains', {
    enumerable: true,
    get: function () {
      return _bsContains.bsContains;
    }
  });
});
define('myincometax/helpers/bs-eq', ['exports', 'ember-bootstrap/helpers/bs-eq'], function (exports, _bsEq) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsEq.default;
    }
  });
  Object.defineProperty(exports, 'eq', {
    enumerable: true,
    get: function () {
      return _bsEq.eq;
    }
  });
});
define('myincometax/helpers/cancel-all', ['exports', 'ember-concurrency/helpers/cancel-all'], function (exports, _cancelAll) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _cancelAll.default;
    }
  });
  Object.defineProperty(exports, 'cancelAll', {
    enumerable: true,
    get: function () {
      return _cancelAll.cancelAll;
    }
  });
});
define('myincometax/helpers/perform', ['exports', 'ember-concurrency/helpers/perform'], function (exports, _perform) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _perform.default;
    }
  });
  Object.defineProperty(exports, 'perform', {
    enumerable: true,
    get: function () {
      return _perform.perform;
    }
  });
});
define('myincometax/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('myincometax/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('myincometax/helpers/task', ['exports', 'ember-concurrency/helpers/task'], function (exports, _task) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _task.default;
    }
  });
  Object.defineProperty(exports, 'task', {
    enumerable: true,
    get: function () {
      return _task.task;
    }
  });
});
define('myincometax/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'myincometax/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var name = void 0,
      version = void 0;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('myincometax/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('myincometax/initializers/data-adapter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('myincometax/initializers/ember-concurrency', ['exports', 'ember-concurrency/initializers/ember-concurrency'], function (exports, _emberConcurrency) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberConcurrency.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _emberConcurrency.initialize;
    }
  });
});
define('myincometax/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('myincometax/initializers/export-application-global', ['exports', 'myincometax/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('myincometax/initializers/injectStore', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('myincometax/initializers/load-bootstrap-config', ['exports', 'myincometax/config/environment', 'ember-bootstrap/config'], function (exports, _environment, _config) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() /* container, application */{
    _config.default.load(_environment.default['ember-bootstrap'] || {});
  }

  exports.default = {
    name: 'load-bootstrap-config',
    initialize: initialize
  };
});
define('myincometax/initializers/store', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('myincometax/initializers/transforms', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("myincometax/instance-initializers/ember-data", ["exports", "ember-data/instance-initializers/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('myincometax/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('myincometax/router', ['exports', 'myincometax/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {});

  exports.default = Router;
});
define('myincometax/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define("myincometax/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "JY3yaCuf", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"content\"],[7],[0,\"\\n\\n\\t\"],[6,\"div\"],[9,\"class\",\"header-block\"],[7],[0,\"\\n\\t\\tСколько я плачу государству?\\n\\t\"],[8],[0,\"\\n\\n\\t\"],[6,\"div\"],[9,\"class\",\"container salary-block\"],[7],[0,\"\\n\\t\\t\"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n\\t\\t\\t\"],[6,\"div\"],[9,\"class\",\"col-sm\"],[7],[0,\"\\n\\t\\t\\t\\t\"],[6,\"div\"],[9,\"class\",\"salary active\"],[7],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"span\"],[9,\"class\",\"label\"],[7],[0,\"Моя зарплата \\\"чистыми\\\"\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[1,[25,\"input\",null,[[\"class\",\"value\",\"key-up\",\"key-down\"],[\"net\",[20,[\"salaryNet\"]],\"netSalaryChanged\",\"filterInput\"]]],false],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"i\"],[9,\"class\",\"fa fa-ruble-sign\"],[9,\"aria-hidden\",\"true\"],[7],[8],[0,\"\\n\\t\\t\\t\\t\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[6,\"div\"],[9,\"class\",\"salary\"],[7],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"span\"],[9,\"class\",\"label\"],[7],[0,\"Моя зарплата \\\"грязными\\\"\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[1,[25,\"input\",null,[[\"class\",\"value\",\"key-up\",\"key-down\"],[\"gross\",[20,[\"salaryGross\"]],\"grossSalaryChanged\",\"filterInput\"]]],false],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"i\"],[9,\"class\",\"fa fa-ruble-sign\"],[9,\"aria-hidden\",\"true\"],[7],[8],[0,\"\\n\\t\\t\\t\\t\"],[8],[0,\"\\n\\t\\t\\t\"],[8],[0,\"\\n\\t\\t\"],[8],[0,\"\\n\\t\"],[8],[0,\"\\n\\t\"],[6,\"div\"],[10,\"class\",[26,[\"fot-block \",[25,\"unless\",[[20,[\"hasOutput\"]],\"inactive\"],null]]]],[7],[0,\"\\n\\t\\t\"],[6,\"span\"],[9,\"class\",\"label\"],[7],[0,\"Моя зарплата до вычета налогов (фонд оплаты труда): \"],[6,\"i\"],[9,\"class\",\"fa fa-info-circle\"],[9,\"aria-hidden\",\"true\"],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"showInfoBlock\",\"fot\"],null],null],[7],[8],[0,\" \"],[8],[0,\"\\n\\t\\t\"],[6,\"span\"],[9,\"class\",\"value\"],[7],[0,\" \"],[1,[18,\"FOT\"],false],[0,\" \"],[8],[0,\"\\n\\t\"],[8],[0,\"\\n\\t\"],[6,\"div\"],[10,\"class\",[26,[\"container taxes-block \",[25,\"unless\",[[20,[\"hasOutput\"]],\"inactive\"],null]]]],[7],[0,\"\\n\\t\\t\"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n\\t\\t\\t\"],[6,\"div\"],[9,\"class\",\"col-sm\"],[7],[0,\"\\n\\t\\t\\t\\t\"],[6,\"div\"],[9,\"class\",\"header\"],[7],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"span\"],[9,\"class\",\"label\"],[7],[0,\"Налоги за месяц\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[6,\"div\"],[9,\"class\",\"tax\"],[7],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"span\"],[9,\"class\",\"label\"],[7],[0,\"Пенсионные отчисления: \"],[6,\"i\"],[9,\"class\",\"fa fa-info-circle\"],[9,\"title\",\"22%\"],[9,\"aria-hidden\",\"true\"],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"showInfoBlock\",\"pensiontax\"],null],null],[7],[8],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"span\"],[9,\"class\",\"value\"],[7],[1,[18,\"pensionTaxMonth\"],false],[8],[0,\"\\n\\t\\t\\t\\t\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[6,\"div\"],[9,\"class\",\"tax\"],[7],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"span\"],[9,\"class\",\"label\"],[7],[0,\"Медицинское страхование: \"],[6,\"i\"],[9,\"class\",\"fa fa-info-circle\"],[9,\"title\",\"5.1%\"],[9,\"aria-hidden\",\"true\"],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"showInfoBlock\",\"medicaltax\"],null],null],[7],[8],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"span\"],[9,\"class\",\"value\"],[7],[1,[18,\"medicalTaxMonth\"],false],[8],[0,\"\\n\\t\\t\\t\\t\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[6,\"div\"],[9,\"class\",\"tax\"],[7],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"span\"],[9,\"class\",\"label\"],[7],[0,\"Социальное страхование: \"],[6,\"i\"],[9,\"class\",\"fa fa-info-circle\"],[9,\"title\",\"2.9%\"],[9,\"aria-hidden\",\"true\"],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"showInfoBlock\",\"socialtax\"],null],null],[7],[8],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"span\"],[9,\"class\",\"value\"],[7],[1,[18,\"socialTaxMonth\"],false],[8],[0,\"\\n\\t\\t\\t\\t\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[6,\"div\"],[9,\"class\",\"tax\"],[7],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"span\"],[9,\"class\",\"label\"],[7],[0,\"НДФЛ: \"],[6,\"i\"],[9,\"class\",\"fa fa-info-circle\"],[9,\"title\",\"13%\"],[9,\"aria-hidden\",\"true\"],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"showInfoBlock\",\"ndfltax\"],null],null],[7],[8],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"span\"],[9,\"class\",\"value\"],[7],[1,[18,\"ndflTaxMonth\"],false],[8],[0,\"\\n\\t\\t\\t\\t\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[6,\"div\"],[9,\"class\",\"tax total\"],[7],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"span\"],[9,\"class\",\"label\"],[7],[0,\"Всего:\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"span\"],[9,\"class\",\"value\"],[7],[1,[18,\"totalTaxesMonth\"],false],[8],[0,\"\\n\\t\\t\\t\\t\"],[8],[0,\"\\n\\t\\t\\t\"],[8],[0,\"\\n\\t\\t\\t\"],[6,\"div\"],[9,\"class\",\"col-sm\"],[7],[0,\"\\n\\t\\t\\t\\t\"],[6,\"div\"],[9,\"class\",\"header\"],[7],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"span\"],[9,\"class\",\"label\"],[7],[0,\"Налоги за год\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[6,\"div\"],[9,\"class\",\"tax\"],[7],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"span\"],[9,\"class\",\"label\"],[7],[0,\"Пенсионные отчисления: \"],[6,\"i\"],[9,\"class\",\"fa fa-info-circle\"],[9,\"title\",\"22%\"],[9,\"aria-hidden\",\"true\"],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"showInfoBlock\",\"pensiontax\"],null],null],[7],[8],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"span\"],[9,\"class\",\"value\"],[7],[1,[18,\"pensionTaxYear\"],false],[8],[0,\"\\n\\t\\t\\t\\t\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[6,\"div\"],[9,\"class\",\"tax\"],[7],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"span\"],[9,\"class\",\"label\"],[7],[0,\"Медицинское страхование: \"],[6,\"i\"],[9,\"class\",\"fa fa-info-circle\"],[9,\"title\",\"5.1%\"],[9,\"aria-hidden\",\"true\"],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"showInfoBlock\",\"medicaltax\"],null],null],[7],[8],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"span\"],[9,\"class\",\"value\"],[7],[1,[18,\"medicalTaxYear\"],false],[8],[0,\"\\n\\t\\t\\t\\t\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[6,\"div\"],[9,\"class\",\"tax\"],[7],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"span\"],[9,\"class\",\"label\"],[7],[0,\"Социальное страхование: \"],[6,\"i\"],[9,\"class\",\"fa fa-info-circle\"],[9,\"title\",\"2.9%\"],[9,\"aria-hidden\",\"true\"],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"showInfoBlock\",\"socialtax\"],null],null],[7],[8],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"span\"],[9,\"class\",\"value\"],[7],[1,[18,\"socialTaxYear\"],false],[8],[0,\"\\n\\t\\t\\t\\t\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[6,\"div\"],[9,\"class\",\"tax\"],[7],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"span\"],[9,\"class\",\"label\"],[7],[0,\"НДФЛ: \"],[6,\"i\"],[9,\"class\",\"fa fa-info-circle\"],[9,\"title\",\"13%\"],[9,\"aria-hidden\",\"true\"],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"showInfoBlock\",\"ndfltax\"],null],null],[7],[8],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"span\"],[9,\"class\",\"value\"],[7],[1,[18,\"ndflTaxYear\"],false],[8],[0,\"\\n\\t\\t\\t\\t\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[6,\"div\"],[9,\"class\",\"tax total\"],[7],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"span\"],[9,\"class\",\"label\"],[7],[0,\"Всего:\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"span\"],[9,\"class\",\"value\"],[7],[1,[18,\"totalTaxesYear\"],false],[8],[0,\"\\n\\t\\t\\t\\t\"],[8],[0,\"\\n\\t\\t\\t\"],[8],[0,\"\\n\\t\\t\"],[8],[0,\"\\n\\t\"],[8],[0,\"\\n\\t\"],[6,\"div\"],[9,\"class\",\"taxes-info-block\"],[7],[0,\"\\n\\t\\t\"],[6,\"div\"],[9,\"id\",\"fot\"],[9,\"class\",\"tax-info\"],[7],[0,\"\\n\\t\\t\\t\"],[6,\"span\"],[9,\"class\",\"label\"],[7],[0,\"Фонд оплаты труда\"],[8],[0,\"\\n\\t\\t\\t\"],[6,\"div\"],[9,\"class\",\"calculation\"],[7],[6,\"i\"],[9,\"class\",\"fa fa-calculator\"],[9,\"aria-hidden\",\"true\"],[7],[8],[0,\" Зарплата \\\"чистыми\\\" + НДФЛ + Пенсионные отчисления + Медицинское страхование + Социальное страхование\"],[8],[0,\"\\n\\t\\t\\t\"],[6,\"div\"],[9,\"class\",\"body\"],[7],[0,\"\\n\\t\\t\\t\\tСумма, которую компания тратит на выплату зарплаты одному сотруднику. Другими словами, это сумма выдаываемая на руки + налоги, выплачиваемые компанией государству.\\n\\t\\t\\t\"],[8],[0,\"\\n\\t\\t\"],[8],[0,\"\\n\\t\\t\"],[6,\"div\"],[9,\"id\",\"pensiontax\"],[9,\"class\",\"tax-info\"],[7],[0,\"\\n\\t\\t\\t\"],[6,\"span\"],[9,\"class\",\"label\"],[7],[0,\"Пенсионные отчисления: 22%\"],[8],[0,\"\\n\\t\\t\\t\"],[6,\"div\"],[9,\"class\",\"calculation\"],[7],[6,\"i\"],[9,\"class\",\"fa fa-calculator\"],[9,\"aria-hidden\",\"true\"],[7],[8],[0,\" Зарплата \\\"грязными\\\" * 0.22\"],[8],[0,\"\\n\\t\\t\\t\"],[6,\"div\"],[9,\"class\",\"body\"],[7],[0,\"\\n\\t\\t\\t\\tСобранные средства направляются в\\n\\t\\t\\t\\t\"],[6,\"a\"],[9,\"target\",\"_blank\"],[9,\"href\",\"https://ru.wikipedia.org/wiki/%D0%9F%D0%B5%D0%BD%D1%81%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D0%B9_%D1%84%D0%BE%D0%BD%D0%B4_%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D0%B9%D1%81%D0%BA%D0%BE%D0%B9_%D0%A4%D0%B5%D0%B4%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D0%B8\"],[7],[0,\"Пенсионный фонд Российской Федерации (ПФР) \"],[6,\"i\"],[9,\"class\",\"fa fa-wikipedia-w\"],[9,\"aria-hidden\",\"true\"],[7],[8],[8],[0,\".\\n\\t\\t\\t\\t\"],[6,\"br\"],[7],[8],[0,\"\\n\\t\\t\\t\\tРасходуется на пенсионное обеспечение граждан РФ, уже находящихся на пенсии. Накопления пенсионных отчислений не происходит.\\n\\t\\t\\t\\tСуммарный объем расходов на пенсионное обеспечение составляет более \"],[6,\"a\"],[9,\"target\",\"_blank\"],[9,\"href\",\"http://www.pfrf.ru/press_center/~2017/10/26/145632\"],[7],[0,\"7 трлн. рублей\"],[8],[0,\" в год и является крупнейшей статьей расходов государства.\\n\\t\\t\\t\\tДефицит финансируется из \"],[6,\"a\"],[9,\"target\",\"_blank\"],[9,\"href\",\"https://ru.wikipedia.org/wiki/%D0%A4%D0%B5%D0%B4%D0%B5%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D0%B1%D1%8E%D0%B4%D0%B6%D0%B5%D1%82_%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D0%B8\"],[7],[0,\"Федерального бюджета \"],[6,\"i\"],[9,\"class\",\"fa fa-wikipedia-w\"],[9,\"aria-hidden\",\"true\"],[7],[8],[8],[0,\" и \"],[6,\"a\"],[9,\"target\",\"_blank\"],[9,\"href\",\"https://ru.wikipedia.org/wiki/%D0%A4%D0%BE%D0%BD%D0%B4_%D0%BD%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B3%D0%BE_%D0%B1%D0%BB%D0%B0%D0%B3%D0%BE%D1%81%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%B8%D1%8F_%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D0%B8\"],[7],[0,\"Фонда национального благосостояния \"],[6,\"i\"],[9,\"class\",\"fa fa-wikipedia-w\"],[9,\"aria-hidden\",\"true\"],[7],[8],[8],[0,\".\\n\\t\\t\\t\"],[8],[0,\"\\n\\t\\t\"],[8],[0,\"\\n\\t\\t\"],[6,\"div\"],[9,\"id\",\"medicaltax\"],[9,\"class\",\"tax-info\"],[7],[0,\"\\n\\t\\t\\t\"],[6,\"span\"],[9,\"class\",\"label\"],[7],[0,\"Медицинское страхование: 5.1%\"],[8],[0,\"\\n\\t\\t\\t\"],[6,\"div\"],[9,\"class\",\"calculation\"],[7],[6,\"i\"],[9,\"class\",\"fa fa-calculator\"],[9,\"aria-hidden\",\"true\"],[7],[8],[0,\" Зарплата \\\"грязными\\\" * 0.051\"],[8],[0,\"\\n\\t\\t\\t\"],[6,\"div\"],[9,\"class\",\"body\"],[7],[0,\"\\n\\t\\t\\t\\tСобранные средства направляются в \"],[6,\"a\"],[9,\"target\",\"_blank\"],[9,\"href\",\"https://ru.wikipedia.org/wiki/%D0%A4%D0%B5%D0%B4%D0%B5%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D1%84%D0%BE%D0%BD%D0%B4_%D0%BE%D0%B1%D1%8F%D0%B7%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D0%B3%D0%BE_%D0%BC%D0%B5%D0%B4%D0%B8%D1%86%D0%B8%D0%BD%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D1%81%D1%82%D1%80%D0%B0%D1%85%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F\"],[7],[0,\"Фонд обязательного медицинского страхования (ФОМС) \"],[6,\"i\"],[9,\"class\",\"fa fa-wikipedia-w\"],[9,\"aria-hidden\",\"true\"],[7],[8],[8],[0,\".\\n\\t\\t\\t\\t\"],[6,\"br\"],[7],[8],[0,\"\\n\\t\\t\\t\\tРасходуется на оплату услуг, входящих в \"],[6,\"a\"],[9,\"target\",\"_blank\"],[9,\"href\",\"https://ru.wikipedia.org/wiki/%D0%9C%D0%B5%D0%B4%D0%B8%D1%86%D0%B8%D0%BD%D1%81%D0%BA%D0%BE%D0%B5_%D1%81%D1%82%D1%80%D0%B0%D1%85%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5#%D0%91%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D1%8F_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B0_%D0%9E%D0%9C%D0%A1\"],[7],[0,\"базовую программу Обязательного медицинского страхования (ОМС) \"],[6,\"i\"],[9,\"class\",\"fa fa-wikipedia-w\"],[9,\"aria-hidden\",\"true\"],[7],[8],[8],[0,\".\\n\\t\\t\\t\"],[8],[0,\"\\n\\t\\t\"],[8],[0,\"\\n\\t\\t\"],[6,\"div\"],[9,\"id\",\"socialtax\"],[9,\"class\",\"tax-info\"],[7],[0,\"\\n\\t\\t\\t\"],[6,\"span\"],[9,\"class\",\"label\"],[7],[0,\"Социальное страхование: 2.9%\"],[8],[0,\"\\n\\t\\t\\t\"],[6,\"div\"],[9,\"class\",\"calculation\"],[7],[6,\"i\"],[9,\"class\",\"fa fa-calculator\"],[9,\"aria-hidden\",\"true\"],[7],[8],[0,\" Зарплата \\\"грязными\\\" * 0.029\"],[8],[0,\"\\n\\t\\t\\t\"],[6,\"div\"],[9,\"class\",\"body\"],[7],[0,\"\\n\\t\\t\\t\\tСобранные средства направляются в \"],[6,\"a\"],[9,\"target\",\"_blank\"],[9,\"href\",\"https://ru.wikipedia.org/wiki/%D0%A4%D0%BE%D0%BD%D0%B4_%D1%81%D0%BE%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B3%D0%BE_%D1%81%D1%82%D1%80%D0%B0%D1%85%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F_%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D0%B9%D1%81%D0%BA%D0%BE%D0%B9_%D0%A4%D0%B5%D0%B4%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D0%B8\"],[7],[0,\"Фонд социального страхования Российской Федерации \"],[6,\"i\"],[9,\"class\",\"fa fa-wikipedia-w\"],[9,\"aria-hidden\",\"true\"],[7],[8],[8],[0,\",\\n\\t\\t\\t\\t\"],[6,\"br\"],[7],[8],[0,\"\\n\\t\\t\\t\\tРасходуется на оплату \\\"больничных\\\", пособий по беременности и родам, пособий по уходу за ребенком, выплаты пострадавшим на производстве, помощь инвалидам и пр.\\n\\t\\t\\t\"],[8],[0,\"\\n\\t\\t\"],[8],[0,\"\\n\\t\\t\"],[6,\"div\"],[9,\"id\",\"ndfltax\"],[9,\"class\",\"tax-info\"],[7],[0,\"\\n\\t\\t\\t\"],[6,\"span\"],[9,\"class\",\"label\"],[7],[0,\"НДФЛ: 13%\"],[8],[0,\"\\n\\t\\t\\t\"],[6,\"div\"],[9,\"class\",\"calculation\"],[7],[6,\"i\"],[9,\"class\",\"fa fa-calculator\"],[9,\"aria-hidden\",\"true\"],[7],[8],[0,\" Зарплата \\\"грязными\\\" * 0.13\"],[8],[0,\"\\n\\t\\t\\t\"],[6,\"div\"],[9,\"class\",\"body\"],[7],[0,\"\\n\\t\\t\\t\\tСобранные средства распределяются между федеральным бюджетом, региональным бюджетом и муниципальным бюджетом.\\n\\t\\t\\t\"],[8],[0,\"\\n\\t\\t\"],[8],[0,\"\\n\\t\"],[8],[0,\"\\n\\t\"],[6,\"div\"],[9,\"class\",\"more-info-block\"],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"collapsed\"]]],null,{\"statements\":[[4,\"bs-button\",null,[[\"onClick\"],[[25,\"action\",[[19,0,[]],\"toggle\"],null]]],{\"statements\":[[0,\"\\t    \\t\\tУзнать больше о налогах в России\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[4,\"bs-collapse\",null,[[\"collapsed\"],[[20,[\"collapsed\"]]]],{\"statements\":[[0,\"\\t\\t\\t\"],[6,\"div\"],[9,\"class\",\"well\"],[7],[0,\"\\n\\t\\t  \\t\\t\"],[6,\"div\"],[9,\"class\",\"videoWrapper\"],[7],[0,\"\\n\\t\\t  \\t\\t\\t\"],[6,\"iframe\"],[9,\"width\",\"560\"],[9,\"height\",\"349\"],[9,\"src\",\"https://www.youtube.com/embed/CyKIicFN_w0?ecver=1\"],[9,\"frameborder\",\"0\"],[9,\"allow\",\"autoplay; encrypted-media\"],[9,\"allowfullscreen\",\"\"],[7],[8],[0,\"\\n\\t\\t  \\t\\t\"],[8],[0,\"\\n\\t\\t  \\t\\t\"],[6,\"div\"],[9,\"class\",\"videoWrapper\"],[7],[0,\"\\n\\t\\t  \\t\\t\\t\"],[6,\"iframe\"],[9,\"width\",\"560\"],[9,\"height\",\"349\"],[9,\"src\",\"https://www.youtube.com/embed/x7F1LM09d4k?ecver=1\"],[9,\"frameborder\",\"0\"],[9,\"allow\",\"autoplay; encrypted-media\"],[9,\"allowfullscreen\",\"\"],[7],[8],[0,\"\\n\\t\\t  \\t\\t\"],[8],[0,\"\\n\\t\\t  \\t\\t\"],[6,\"div\"],[9,\"class\",\"videoWrapper\"],[7],[0,\"\\n\\t\\t  \\t\\t\\t\"],[6,\"iframe\"],[9,\"width\",\"560\"],[9,\"height\",\"349\"],[9,\"src\",\"https://www.youtube.com/embed/zuxp2R3meow?ecver=1\"],[9,\"frameborder\",\"0\"],[9,\"allow\",\"autoplay; encrypted-media\"],[9,\"allowfullscreen\",\"\"],[7],[8],[0,\"\\n\\t\\t  \\t\\t\"],[8],[0,\"\\n\\t\\t  \\t\"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\t\"],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[1,[18,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "myincometax/templates/application.hbs" } });
});
define('myincometax/templates/components/ember-popper', ['exports', 'ember-popper/templates/components/ember-popper'], function (exports, _emberPopper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});


define('myincometax/config/environment', [], function() {
  var prefix = 'myincometax';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("myincometax/app")["default"].create({"name":"myincometax","version":"0.0.0+2570a4df"});
}
//# sourceMappingURL=myincometax.map
