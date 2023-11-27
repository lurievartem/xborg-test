import { QueryClient, QueryClientProvider } from "react-query";
import { render, screen } from "@testing-library/react";
import WeatherContainer from "../WeatherContainer";
import { useGetWeather } from "@/app/hooks/useGetWeather";

const mockedUseGetWeather = useGetWeather;
jest.mock("../../hooks/useGetWeather");

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export default wrapper;

describe("WeatherContainer component", () => {
  it("Displays the loading view", () => {
    mockedUseGetWeather.mockImplementation(() => ({
      isLoading: true,
    }));
    render(<WeatherContainer />, { wrapper });
    expect(screen.getByTestId("loading")).toBeInTheDocument();
    expect(screen.getByText(/Loading.../i)).toBeVisible();
  });

  it("Displays the error message", () => {
    mockedUseGetWeather.mockImplementation(() => ({
      isError: true,
    }));
    render(<WeatherContainer />, { wrapper });
    expect(screen.getByTestId("error")).toBeInTheDocument();
  });

  it("should render data", () => {
    mockedUseGetWeather.mockImplementation(() => ({
      status: "success",
      data: { temp: 10, humidity: 80 },
    }));
    render(<WeatherContainer />, { wrapper });
    expect(screen.getByTestId("temp").textContent).toEqual("temp:10");
    expect(screen.getByTestId("humidity").textContent).toEqual("humidity:80");
  });
});
