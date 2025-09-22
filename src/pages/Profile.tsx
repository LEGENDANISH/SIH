import { useState } from "react";
import { User, Edit3, Camera, Heart, Activity, Calendar, Award, Settings, Bell, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "+1 (555) 123-4567",
    dateOfBirth: "1990-03-15",
    height: "165 cm",
    weight: "68.5 kg",
    bloodType: "O+",
    emergencyContact: "John Johnson - +1 (555) 987-6543"
  });

  const [notifications, setNotifications] = useState({
    medications: true,
    appointments: true,
    healthReminders: true,
    weeklyReports: false
  });

  const healthGoals = [
    { goal: "Daily Steps", target: "10,000", current: "8,547", progress: 85 },
    { goal: "Water Intake", target: "2.5L", current: "1.8L", progress: 72 },
    { goal: "Sleep Hours", target: "8h", current: "7.5h", progress: 94 },
    { goal: "Weekly Exercise", target: "5 days", current: "4 days", progress: 80 }
  ];

  const achievements = [
    { name: "30-Day Streak", icon: Award, description: "Logged health data for 30 consecutive days", earned: true },
    { name: "Heart Healthy", icon: Heart, description: "Maintained healthy heart rate for a month", earned: true },
    { name: "Step Master", icon: Activity, description: "Reached 10,000 steps for 7 days straight", earned: false },
    { name: "Wellness Warrior", icon: Shield, description: "Completed all health goals this week", earned: false }
  ];

  const recentActivity = [
    { date: "2024-01-15", activity: "Blood pressure recorded", value: "120/80 mmHg" },
    { date: "2024-01-15", activity: "Morning exercise completed", value: "30 min jog" },
    { date: "2024-01-14", activity: "Weight logged", value: "68.5 kg" },
    { date: "2024-01-14", activity: "Vitamin D taken", value: "1000 IU" },
    { date: "2024-01-13", activity: "Doctor appointment", value: "Regular check-up" }
  ];

  const handleSaveProfile = () => {
    setIsEditing(false);
    // Here you would typically save to backend
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-20 md:pb-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center">
              <User className="h-10 w-10 text-white" />
            </div>
            <Button size="sm" className="absolute -bottom-1 -right-1 rounded-full w-8 h-8 p-0">
              <Camera className="h-4 w-4" />
            </Button>
          </div>
          <div>
            <h1 className="text-2xl font-bold">{profile.name}</h1>
            <p className="text-muted-foreground">{profile.email}</p>
            <div className="flex items-center space-x-2 mt-1">
              <Badge variant="secondary">Premium Member</Badge>
              <Badge variant="outline" className="text-green-600 border-green-200">
                <Heart className="h-3 w-3 mr-1" />
                Healthy
              </Badge>
            </div>
          </div>
        </div>
        <Button 
          onClick={() => setIsEditing(!isEditing)}
          variant={isEditing ? "default" : "outline"}
        >
          <Edit3 className="h-4 w-4 mr-2" />
          {isEditing ? "Save Changes" : "Edit Profile"}
        </Button>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="health">Health Info</TabsTrigger>
          <TabsTrigger value="goals">Goals</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="health-card text-center">
              <Calendar className="h-6 w-6 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold">127</p>
              <p className="text-sm text-muted-foreground">Days Active</p>
            </Card>
            <Card className="health-card text-center">
              <Activity className="h-6 w-6 text-green-500 mx-auto mb-2" />
              <p className="text-2xl font-bold">85%</p>
              <p className="text-sm text-muted-foreground">Goals Met</p>
            </Card>
            <Card className="health-card text-center">
              <Heart className="h-6 w-6 text-red-500 mx-auto mb-2" />
              <p className="text-2xl font-bold">72</p>
              <p className="text-sm text-muted-foreground">Avg BPM</p>
            </Card>
            <Card className="health-card text-center">
              <Award className="h-6 w-6 text-yellow-500 mx-auto mb-2" />
              <p className="text-2xl font-bold">8</p>
              <p className="text-sm text-muted-foreground">Achievements</p>
            </Card>
          </div>

          {/* Recent Activity */}
          <Card className="health-card">
            <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
            <div className="space-y-3">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                  <div>
                    <p className="font-medium text-sm">{activity.activity}</p>
                    <p className="text-xs text-muted-foreground">{activity.date}</p>
                  </div>
                  <Badge variant="outline">{activity.value}</Badge>
                </div>
              ))}
            </div>
          </Card>

          {/* Achievements */}
          <Card className="health-card">
            <h3 className="text-lg font-semibold mb-4">Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div
                    key={index}
                    className={`flex items-center space-x-3 p-4 rounded-lg border-2 ${
                      achievement.earned
                        ? "bg-yellow-50 border-yellow-200"
                        : "bg-gray-50 border-gray-200"
                    }`}
                  >
                    <Icon className={`h-6 w-6 ${achievement.earned ? "text-yellow-600" : "text-gray-400"}`} />
                    <div>
                      <p className={`font-medium ${achievement.earned ? "text-yellow-800" : "text-gray-600"}`}>
                        {achievement.name}
                      </p>
                      <p className="text-xs text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="health" className="space-y-6">
          <Card className="health-card">
            <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={profile.name}
                  onChange={(e) => setProfile({...profile, name: e.target.value})}
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  value={profile.email}
                  onChange={(e) => setProfile({...profile, email: e.target.value})}
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  value={profile.phone}
                  onChange={(e) => setProfile({...profile, phone: e.target.value})}
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dob">Date of Birth</Label>
                <Input
                  id="dob"
                  type="date"
                  value={profile.dateOfBirth}
                  onChange={(e) => setProfile({...profile, dateOfBirth: e.target.value})}
                  disabled={!isEditing}
                />
              </div>
            </div>
          </Card>

          <Card className="health-card">
            <h3 className="text-lg font-semibold mb-4">Health Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="height">Height</Label>
                <Input
                  id="height"
                  value={profile.height}
                  onChange={(e) => setProfile({...profile, height: e.target.value})}
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="weight">Current Weight</Label>
                <Input
                  id="weight"
                  value={profile.weight}
                  onChange={(e) => setProfile({...profile, weight: e.target.value})}
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bloodType">Blood Type</Label>
                <Input
                  id="bloodType"
                  value={profile.bloodType}
                  onChange={(e) => setProfile({...profile, bloodType: e.target.value})}
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="emergency">Emergency Contact</Label>
                <Input
                  id="emergency"
                  value={profile.emergencyContact}
                  onChange={(e) => setProfile({...profile, emergencyContact: e.target.value})}
                  disabled={!isEditing}
                />
              </div>
            </div>
            
            {isEditing && (
              <div className="mt-6">
                <Button onClick={handleSaveProfile} className="health-button-primary">
                  Save Changes
                </Button>
              </div>
            )}
          </Card>
        </TabsContent>

        <TabsContent value="goals" className="space-y-6">
          <Card className="health-card">
            <h3 className="text-lg font-semibold mb-4">Health Goals Progress</h3>
            <div className="space-y-4">
              {healthGoals.map((goal, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{goal.goal}</span>
                    <span className="text-sm text-muted-foreground">
                      {goal.current} / {goal.target}
                    </span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${goal.progress}%` }}
                    />
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-medium">{goal.progress}%</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <Card className="health-card">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Bell className="h-5 w-5 mr-2" />
              Notification Settings
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Medication Reminders</p>
                  <p className="text-sm text-muted-foreground">Get notified when it's time to take medication</p>
                </div>
                <Switch
                  checked={notifications.medications}
                  onCheckedChange={(checked) => setNotifications({...notifications, medications: checked})}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Appointment Reminders</p>
                  <p className="text-sm text-muted-foreground">Receive alerts for upcoming appointments</p>
                </div>
                <Switch
                  checked={notifications.appointments}
                  onCheckedChange={(checked) => setNotifications({...notifications, appointments: checked})}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Health Reminders</p>
                  <p className="text-sm text-muted-foreground">Daily reminders for health tracking</p>
                </div>
                <Switch
                  checked={notifications.healthReminders}
                  onCheckedChange={(checked) => setNotifications({...notifications, healthReminders: checked})}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Weekly Reports</p>
                  <p className="text-sm text-muted-foreground">Receive weekly health summary reports</p>
                </div>
                <Switch
                  checked={notifications.weeklyReports}
                  onCheckedChange={(checked) => setNotifications({...notifications, weeklyReports: checked})}
                />
              </div>
            </div>
          </Card>

          <Card className="health-card">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Settings className="h-5 w-5 mr-2" />
              App Settings
            </h3>
            <div className="space-y-4">
              <Button variant="outline" className="w-full justify-start">
                Export Health Data
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Privacy Settings
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Data Backup
              </Button>
              <Button variant="destructive" className="w-full justify-start">
                Delete Account
              </Button>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Profile;