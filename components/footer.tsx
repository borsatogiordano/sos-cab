import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Essential Links & Company Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                SOS Cab
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Plataforma financeira completa para taxistas profissionais.
                Controle seus gastos, gerencie suas corridas e maximize seus
                lucros.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-foreground mb-4">Serviços</h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      Controle de Gastos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      Gestão de Corridas
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      Relatórios Financeiros
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      Análise de Lucros
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-4">Suporte</h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      Central de Ajuda
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      Tutoriais
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      Contato
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      Status do Sistema
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form & Social Media */}
          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-semibold text-foreground mb-4">
                Entre em Contato
              </h4>
              <p className="text-muted-foreground text-sm mb-6">
                Tem alguma dúvida? Envie uma mensagem e nossa equipe retornará
                em breve.
              </p>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  type="text"
                  placeholder="Seu nome"
                  className="bg-background border-border focus:ring-ring"
                />
                <Input
                  type="email"
                  placeholder="Seu email"
                  className="bg-background border-border focus:ring-ring"
                />
              </div>
              <Textarea
                placeholder="Sua mensagem"
                rows={4}
                className="bg-background border-border focus:ring-ring resize-none"
              />
              <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
                Enviar Mensagem
              </Button>
            </form>

            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">
                Siga-nos nas redes sociais
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; 2024 SOS Cab. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Termos de Uso
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Privacidade
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </footer>
  );
}
