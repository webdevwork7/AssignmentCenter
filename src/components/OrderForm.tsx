import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { siteConfig } from "@/config/site";
import { Calculator, Phone, Plus, Minus } from "lucide-react";

const OrderForm = () => {
  // Service and Subject fields
  const [service, setService] = useState("");
  const [subject, setSubject] = useState("");
  const [deadline, setDeadline] = useState("");
  const [pages, setPages] = useState("");
  const [price, setPrice] = useState(0);

  // Service options with 'Assignment Help' first
  const serviceOptions = [
    "Assignment Help",
    "Essay Writing",
    "Research Paper",
    "Thesis & Dissertation",
    "Math & Statistics",
    "Online Course Help",
  ];

  // Comprehensive subject list for Assignment Help
  const allSubjects = [
    "Accounting",
    "Anthropology",
    "Architecture",
    "Art",
    "Biology",
    "Business",
    "Chemistry",
    "Communication",
    "Computer Science",
    "Criminal Justice",
    "Data Science",
    "Economics",
    "Education",
    "Engineering",
    "English",
    "Environmental Science",
    "Finance",
    "Geography",
    "Geology",
    "History",
    "Human Resource",
    "Information Technology",
    "Law",
    "Linguistics",
    "Management",
    "Marketing",
    "Mathematics",
    "Medicine",
    "Nursing",
    "Philosophy",
    "Physics",
    "Political Science",
    "Project Management",
    "Psychology",
    "Public Health",
    "Science",
    "Social Science",
    "Sociology",
    "Statistics",
    "Theology",
    "Zoology",
    "Other",
  ];

  // Get subjects for selected service
  const subjectOptions = service
    ? service === "Assignment Help"
      ? allSubjects
      : siteConfig.serviceSubjects[service] || []
    : [];

  // Strictly clone deadline options from reference site (example wording/order)
  const deadlineOptions = [
    { name: "6 Hours", multiplier: 3.0 },
    { name: "12 Hours", multiplier: 2.8 },
    { name: "24 Hours", multiplier: 2.5 },
    { name: "2 Days", multiplier: 2.0 },
    { name: "3 Days", multiplier: 1.8 },
    { name: "4-5 Days", multiplier: 1.5 },
    { name: "6-7 Days", multiplier: 1.2 },
    { name: "8-10 Days", multiplier: 1.1 },
    { name: "11-14 Days", multiplier: 1.0 },
    { name: "15+ Days", multiplier: 0.9 },
  ];

  // Strictly clone number of pages options from reference site (dropdown, not input)
  const pageOptions = [
    { value: "1", label: "1 Page / 250 Words" },
    { value: "2", label: "2 Pages / 500 Words" },
    { value: "3", label: "3 Pages / 750 Words" },
    { value: "4", label: "4 Pages / 1000 Words" },
    { value: "5", label: "5 Pages / 1250 Words" },
    { value: "6", label: "6 Pages / 1500 Words" },
    { value: "7", label: "7 Pages / 1750 Words" },
    { value: "8", label: "8 Pages / 2000 Words" },
    { value: "9", label: "9 Pages / 2250 Words" },
    { value: "10", label: "10 Pages / 2500 Words" },
    { value: "11", label: "11 Pages / 2750 Words" },
    { value: "12", label: "12 Pages / 3000 Words" },
    { value: "13", label: "13 Pages / 3250 Words" },
    { value: "14", label: "14 Pages / 3500 Words" },
    { value: "15", label: "15 Pages / 3750 Words" },
    { value: "16", label: "16 Pages / 4000 Words" },
    { value: "17", label: "17 Pages / 4250 Words" },
    { value: "18", label: "18 Pages / 4500 Words" },
    { value: "19", label: "19 Pages / 4750 Words" },
    { value: "20", label: "20 Pages / 5000 Words" },
    { value: "29", label: "29 Pages / 7250 Words" },
    { value: "30", label: "30 Pages / 7500 Words" },
    { value: "40", label: "40 Pages / 10000 Words" },
    { value: "50", label: "50 Pages / 12500 Words" },
    { value: "60", label: "60 Pages / 15000 Words" },
    { value: "70", label: "70 Pages / 17500 Words" },
    { value: "80", label: "80 Pages / 20000 Words" },
    { value: "90", label: "90 Pages / 22500 Words" },
    { value: "100", label: "100 Pages / 25000 Words" },
    { value: "110", label: "110 Pages / 27500 Words" },
    { value: "120", label: "120 Pages / 30000 Words" },
    { value: "130", label: "130 Pages / 32500 Words" },
    { value: "140", label: "140 Pages / 35000 Words" },
    { value: "150", label: "150 Pages / 37500 Words" },
    { value: "160", label: "160 Pages / 40000 Words" },
    { value: "180", label: "180 Pages / 45000 Words" },
    { value: "200", label: "200 Pages / 50000 Words" },
    { value: "250", label: "250 Pages / 62500 Words" },
  ];

  // Price calculation logic (same as before, but pages is string)
  const calculatePrice = () => {
    if (!service || !subject || !deadline || !pages) {
      setPrice(0);
      return;
    }
    let basePrice = 0;
    switch (service) {
      case "Assignment Help":
        basePrice = 12;
        break;
      case "Essay Writing":
        basePrice = 15;
        break;
      case "Research Paper":
        basePrice = 20;
        break;
      case "Thesis & Dissertation":
        basePrice = 25;
        break;
      case "Math & Statistics":
        basePrice = 18;
        break;
      case "Online Course Help":
        basePrice = 200;
        break;
      default:
        basePrice = 0;
    }
    const deadlineData = deadlineOptions.find((d) => d.name === deadline);
    const deadlineMultiplier = deadlineData ? deadlineData.multiplier : 1;
    let totalPrice = 0;
    if (service === "Online Course Help") {
      totalPrice = Math.round(basePrice * deadlineMultiplier);
    } else {
      // For '20+' pages, use 20 as multiplier for price calculation
      const pageCount = parseInt(pages) || 1;
      totalPrice = Math.round(basePrice * deadlineMultiplier * pageCount);
    }
    totalPrice = Math.round(totalPrice * 0.75);
    setPrice(totalPrice);
  };

  useEffect(() => {
    calculatePrice();
    setSubject("");
    setPages("");
    // eslint-disable-next-line
  }, [service]);

  useEffect(() => {
    calculatePrice();
    // eslint-disable-next-line
  }, [service, subject, deadline, pages]);

  return (
    <div className="relative">
      <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0 rainbow-border p-1 w-full">
        <div className="bg-white rounded-lg">
          <CardHeader className="text-center pb-4 pt-6 px-6">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <Calculator className="h-6 w-6 text-white" />
            </div>
            <CardTitle className="text-xl font-bold text-gray-900">
              Get Instant Quote
            </CardTitle>
            <p className="text-gray-600 text-sm">
              Fill the form to get real-time pricing
            </p>
          </CardHeader>
          <CardContent className="space-y-4 px-6 pb-6">
            {/* Service Dropdown */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">
                Service
              </Label>
              <Select value={service} onValueChange={setService}>
                <SelectTrigger className="h-10 text-sm">
                  <SelectValue placeholder="Select service" />
                </SelectTrigger>
                <SelectContent>
                  {serviceOptions.map((srv) => (
                    <SelectItem key={srv} value={srv}>
                      {srv}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {/* Subject Dropdown */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">
                Subject
              </Label>
              <Select
                value={subject}
                onValueChange={setSubject}
                disabled={!service}
              >
                <SelectTrigger className="h-10 text-sm">
                  <SelectValue
                    placeholder={
                      service ? "Select subject" : "Select service first"
                    }
                  />
                </SelectTrigger>
                <SelectContent>
                  {subjectOptions.map((subj) => (
                    <SelectItem key={subj} value={subj}>
                      {subj}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {/* Deadline Dropdown */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">
                Deadline
              </Label>
              <Select value={deadline} onValueChange={setDeadline}>
                <SelectTrigger className="h-10 text-sm">
                  <SelectValue placeholder="Select deadline" />
                </SelectTrigger>
                <SelectContent>
                  {deadlineOptions.map((d) => (
                    <SelectItem key={d.name} value={d.name}>
                      {d.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {/* Number of Pages Dropdown */}
            {service !== "Online Course Help" && (
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">
                  Number of Pages
                </Label>
                <Select value={pages} onValueChange={setPages}>
                  <SelectTrigger className="h-10 text-sm">
                    <SelectValue placeholder="Select pages" />
                  </SelectTrigger>
                  <SelectContent>
                    {pageOptions.map((pg) => (
                      <SelectItem key={pg.value} value={pg.value}>
                        {pg.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
            {/* Price Display */}
            {price > 0 && (
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-4 text-white text-center">
                <div className="text-2xl font-bold">${price}</div>
                <div className="text-sm opacity-90">
                  Total estimated price (25% off applied)
                </div>
              </div>
            )}
            <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-3 text-sm font-semibold">
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </Button>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default OrderForm;
