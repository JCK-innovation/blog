import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Mail, Copy, Check, Send, MapPin, Clock, Loader2 } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, "이름을 입력해주세요"),
  company: z.string().optional(),
  email: z.string().email("올바른 이메일 주소를 입력해주세요"),
  serviceInterest: z.string().optional(),
  message: z.string().min(10, "문의 내용을 10자 이상 입력해주세요"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      serviceInterest: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response;
    },
    onSuccess: () => {
      toast({
        title: "문의가 접수되었습니다",
        description: "빠른 시일 내에 연락드리겠습니다.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "문의 접수 실패",
        description: "잠시 후 다시 시도해주세요.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText("jck.innov@gmail.com");
    setCopied(true);
    toast({
      title: "이메일이 복사되었습니다",
      description: "jck.innov@gmail.com",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-muted/30"
      ref={ref}
      data-testid="section-contact"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="secondary" className="mb-4" data-testid="badge-contact">
            Contact
          </Badge>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
            data-testid="text-contact-title"
          >
            문의하기
          </h2>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            data-testid="text-contact-description"
          >
            프로젝트에 대해 상담이 필요하시면 언제든 연락해 주세요.
            <br className="hidden md:block" />
            빠른 시일 내에 답변드리겠습니다.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card data-testid="card-contact-form">
              <CardHeader>
                <CardTitle className="text-xl">프로젝트 문의</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                    data-testid="form-contact"
                  >
                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>이름 *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="홍길동"
                                {...field}
                                data-testid="input-name"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>회사명</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="회사명 (선택)"
                                {...field}
                                data-testid="input-company"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>이메일 *</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="example@company.com"
                              {...field}
                              data-testid="input-email"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="serviceInterest"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>관심 서비스</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger data-testid="select-service">
                                <SelectValue placeholder="서비스를 선택해주세요" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="software" data-testid="option-software">
                                Custom Software
                              </SelectItem>
                              <SelectItem value="instrument" data-testid="option-instrument">
                                System Instrument
                              </SelectItem>
                              <SelectItem value="both" data-testid="option-both">
                                Software + Instrument
                              </SelectItem>
                              <SelectItem value="consulting" data-testid="option-consulting">
                                기술 상담
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>문의 내용 *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="프로젝트에 대해 자세히 알려주세요..."
                              className="min-h-32 resize-none"
                              {...field}
                              data-testid="textarea-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full"
                      size="lg"
                      disabled={contactMutation.isPending}
                      data-testid="button-submit"
                    >
                      {contactMutation.isPending ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          전송 중...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          문의 보내기
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card data-testid="card-contact-info">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  이메일
                </h3>
                <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg border border-border">
                  <code
                    className="flex-1 text-sm font-mono text-foreground"
                    data-testid="text-email"
                  >
                    jck.innov@gmail.com
                  </code>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={copyEmail}
                    data-testid="button-copy-email"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card data-testid="card-response-time">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  응답 시간
                </h3>
                <p className="text-muted-foreground text-sm">
                  영업일 기준 1-2일 내에 답변드립니다.
                  <br />
                  급한 문의는 이메일로 연락해주세요.
                </p>
              </CardContent>
            </Card>

            <div className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20">
              <h3 className="font-semibold text-foreground mb-2">
                프로젝트를 시작할 준비가 되셨나요?
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                LabVIEW 자동화 및 계측 시스템 전문가가 귀사의 프로젝트를
                도와드립니다.
              </p>
              <Badge variant="secondary" className="font-mono text-xs">
                Est. 2025
              </Badge>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
