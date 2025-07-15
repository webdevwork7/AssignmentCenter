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
import { Calculator, Phone } from "lucide-react";

const OrderForm = () => {
  // State for form fields
  const [service, setService] = useState("");
  const [subject, setSubject] = useState("");
  const [deadline, setDeadline] = useState("");
  const [pages, setPages] = useState("");
  const [price, setPrice] = useState({ original: 0, discounted: 0 });

  // Service options
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

  // Mock serviceSubjects for other services
  const serviceSubjects = {
    "Essay Writing": [
      "English",
      "Literature",
      "History",
      "Philosophy",
      "Other",
    ],
    "Research Paper": ["Science", "Social Science", "Psychology", "Other"],
    "Thesis & Dissertation": ["All Subjects"],
    "Math & Statistics": ["Mathematics", "Statistics", "Data Science"],
    "Online Course Help": ["All Subjects"],
  };

  // Get subjects for selected service
  const subjectOptions = service
    ? service === "Assignment Help"
      ? allSubjects
      : serviceSubjects[service] || []
    : [];

  // Deadline options with new order and labels
  const deadlineOptions = [
    { name: "4 Hours", basePrice: 1450 },
    { name: "8 Hours", basePrice: 1361.25 },
    { name: "16 Hours", basePrice: 1300 },
    { name: "1 Day", basePrice: 1252.5 },
    { name: "2 Days", basePrice: 1143.58 },
    { name: "3 Days", basePrice: 1055.61 },
    { name: "4 Days", basePrice: 1000.52 },
    { name: "5 Days", basePrice: 950 },
    { name: "6 Days", basePrice: 900 },
    { name: "7 Days", basePrice: 850 },
    { name: "8 Days", basePrice: 800 },
    { name: "9 Days", basePrice: 750 },
    { name: "15 Days", basePrice: 704.46 },
    { name: "20 Days", basePrice: 650 },
    { name: "25 Days", basePrice: 600 },
    { name: "30 Days", basePrice: 550 },
  ];

  // Page options
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
    { value: "21", label: "21 Pages / 5250 Words" },
    { value: "22", label: "22 Pages / 5500 Words" },
    { value: "23", label: "23 Pages / 5750 Words" },
    { value: "24", label: "24 Pages / 6000 Words" },
    { value: "25", label: "25 Pages / 6250 Words" },
    { value: "26", label: "26 Pages / 6500 Words" },
    { value: "27", label: "27 Pages / 6750 Words" },
    { value: "28", label: "28 Pages / 7000 Words" },
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

  const calculatePrice = () => {
    if (!service || !subject || !deadline || !pages) {
      setPrice({ original: 0, discounted: 0 });
      return;
    }

    const pageCount = parseInt(pages) || 1;
    const deadlineOption = deadlineOptions.find((d) => d.name === deadline);
    const basePricePerPage = deadlineOption ? deadlineOption.basePrice : 544.5;

    let orig = 0;

    if (pageCount === 1) {
      orig = basePricePerPage;
    } else if (pageCount === 2) {
      orig = basePricePerPage * 2.05;
    } else {
      // Dynamically adjust based on real pricing logic
      let adjustmentFactor = 1.0;

      if (["8-10 Days"].includes(deadline) && pageCount >= 5) {
        adjustmentFactor = 1.0 / Math.pow(pageCount, 0.02);
      } else if (["15+ Days"].includes(deadline) && pageCount >= 11) {
        adjustmentFactor = 1.0 / Math.pow(pageCount, 0.015);
      } else if (["3 Days"].includes(deadline) && pageCount >= 29) {
        adjustmentFactor = 1.0 / Math.pow(pageCount, 0.01);
      }

      orig = basePricePerPage * pageCount * adjustmentFactor;
    }

    orig = Math.round(orig * 100) / 100;
    const discounted = Math.round(orig * 0.75 * 100) / 100;

    setPrice({ original: orig, discounted });
  };

  useEffect(() => {
    calculatePrice();
    setSubject("");
    setPages("");
    setDeadline(""); // Reset deadline when service changes
  }, [service]);

  useEffect(() => {
    calculatePrice();
  }, [service, subject, deadline, pages]);

  return (
    <div className="relative">
      <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0 p-1 w-full max-w-md mx-auto">
        <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 p-[2px] rounded-lg">
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
              {price.original > 0 && (
                <div className="flex flex-col items-center justify-center gap-1 mb-4">
                  <div className="text-sm text-gray-400 line-through">
                    INR{" "}
                    {price.original.toLocaleString("en-IN", {
                      minimumFractionDigits: 2,
                    })}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold text-green-600">
                      INR{" "}
                      {price.discounted.toLocaleString("en-IN", {
                        minimumFractionDigits: 2,
                      })}
                    </span>
                    <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
                      25% Off
                    </span>
                  </div>
                </div>
              )}
              <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-3 text-sm font-semibold">
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
            </CardContent>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default OrderForm;
