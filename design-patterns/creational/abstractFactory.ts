/**
 * Provides an interface to create families of related or dependent objects without specifying their concrete classes.

Example: GUI toolkits creating Windows or macOS components.
 */
interface Button {
    render(): void;
  }
  
  class WindowsButton implements Button {
    render() {
      console.log("Rendering Windows Button");
    }
  }
  
  class MacButton implements Button {
    render() {
      console.log("Rendering Mac Button");
    }
  }
  
  interface GUIFactory {
    createButton(): Button;
  }
  
  class WindowsFactory implements GUIFactory {
    createButton(): Button {
      return new WindowsButton();
    }
  }
  
  class MacFactory implements GUIFactory {
    createButton(): Button {
      return new MacButton();
    }
  }
  
  const windowsFactory: GUIFactory = new WindowsFactory();
  const windowsButton = windowsFactory.createButton();
  windowsButton.render(); // Rendering Windows Button

  const macFactory: GUIFactory = new MacFactory();
  const macButton = macFactory.createButton();
  macButton.render(); // Rendering Mac Button
  
  
