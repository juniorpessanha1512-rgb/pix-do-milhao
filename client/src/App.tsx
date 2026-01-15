import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import CheckoutIdentification from "./pages/CheckoutIdentification";
import CheckoutRegistration from "./pages/CheckoutRegistration";
import CheckoutCart from "./pages/CheckoutCart";
import CheckoutPayment from "./pages/CheckoutPayment";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/checkout/identification"} component={CheckoutIdentification} />
      <Route path={"/checkout/registration"} component={CheckoutRegistration} />
      <Route path={"/checkout/cart"} component={CheckoutCart} />
      <Route path={"/checkout/payment"} component={CheckoutPayment} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster richColors position="top-center" />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
