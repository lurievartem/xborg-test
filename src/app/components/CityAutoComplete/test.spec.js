import { QueryClient, QueryClientProvider } from "react-query";
import { render, screen } from "@testing-library/react";
import CityAutoComplete from "../CityAutoComplete";
import { useGetCity } from "@/app/hooks/useGetCity";

const mockedUseGetCity = useGetCity;
jest.mock("../../hooks/useGetCity");

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

describe("CityAutoComplete component", () => {
  it("should render city list", () => {
    mockedUseGetCity.mockImplementation(() => ({
      status: "success",
      data: [
        { properties: { city: "city" } },
        { properties: { city: "city2" } },
      ],
    }));
    render(<CityAutoComplete />, { wrapper });
    expect(screen.getByTestId("city")).toBeInTheDocument();
    expect(screen.getByTestId("city2")).toBeInTheDocument();
  });
});
