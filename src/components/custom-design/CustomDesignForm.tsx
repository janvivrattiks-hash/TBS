"use client";

import { Button } from "@/components/ui/Button";

export function CustomDesignForm() {
    return (
        <div className="bg-white p-8 md:p-12 shadow-lg border-t-4 border-gold">
            <h3 className="text-2xl font-serif text-navy mb-6">Start Your Custom Design</h3>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                        <input type="text" className="w-full border-b border-gray-300 py-2 focus:border-gold focus:outline-none transition-colors" placeholder="Enter your name" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Contact Number</label>
                        <input type="tel" className="w-full border-b border-gray-300 py-2 focus:border-gold focus:outline-none transition-colors" placeholder="+91 XXXXX XXXXX" />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input type="email" className="w-full border-b border-gray-300 py-2 focus:border-gold focus:outline-none transition-colors" placeholder="email@example.com" />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Jewellery Type</label>
                        <select className="w-full border-b border-gray-300 py-2 focus:border-gold focus:outline-none transition-colors bg-transparent">
                            <option>Gold Jewellery</option>
                            <option>Diamond Jewellery</option>
                            <option>Silver Jewellery</option>
                            <option>Platinum Jewellery</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                        <select className="w-full border-b border-gray-300 py-2 focus:border-gold focus:outline-none transition-colors bg-transparent">
                            <option>₹10,000 - ₹50,000</option>
                            <option>₹50,000 - ₹1 Lakh</option>
                            <option>₹1 Lakh - ₹5 Lakh</option>
                            <option>Above ₹5 Lakh</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Occasion (Optional)</label>
                    <input type="text" className="w-full border-b border-gray-300 py-2 focus:border-gold focus:outline-none transition-colors" placeholder="e.g. Wedding, Anniversary" />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Reference Image</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-sm p-6 text-center cursor-pointer hover:bg-gray-50 transition-colors">
                        <span className="text-gray-500 text-sm">Click to upload or drag and drop</span>
                        <input type="file" className="hidden" />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
                    <textarea rows={4} className="w-full border border-gray-300 rounded-sm p-3 focus:border-gold focus:outline-none transition-colors" placeholder="Describe your idea..."></textarea>
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full">
                    Submit Request
                </Button>
            </form>
        </div>
    );
}
